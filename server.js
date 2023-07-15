const express = require("express");
const app = express();
const port = 4000;
const {query} = require('./database');

app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory API!");
});

app.use(express.json()) 

app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    res.on("finish", () => {
      // the 'finish' event will be emitted when the response is handed over to the OS
      console.log(`Response Status: ${res.statusCode}`);
    });
    next();
  });



//Get all books
app.get("/books", async(req, res)=>{
  try {
    const allBooks = await query("SELECT * FROM books");
    res.status(200).send(allBooks.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Something went wrong"});
  }
});

//Get book by id
app.get("/books/:id", async(req, res)=>{
  const bookId = parseInt(req.params.id,10);

  try {
    const book = await query("SELECT * FROM books WHERE id = $1",[bookId]);
    //check to see if the book is even there
    if(book.rows.length > 0){
      res.status(200).send(book.rows[0]);
    } else {
      res.status(404).json({message: "Book not found"});
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Something went wrong"});
  }

});

//create a new book
app.post("/books", async(req, res) =>{
  //get book info out of the request body by destructuring it.
  const{ title, author, genre, description, price, datepublished} = req.body;
  //create a new book
  try {
    const newBook = await query(
      "INSERT INTO books (title, author, genre, description, price, datepublished) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, author, genre, description, price, datepublished]
    )
    console.log(newBook);
    res.status(201).json(newBook.rows[0]);

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }
});

//update a book
app.patch("/books/:id", async(req, res)=>{
  const bookId = parseInt(req.params.id, 10);
  //destructure the request body
  const{ title, author, genre, description, price, datepublished} = req.body;

  try{
    const updatedBook = await query(
      "UPDATE books SET title = $1, author = $2, genre = $3, description = $4, price = $5, datepublished = $6 WHERE id = $7 RETURNING *",
      [title, author, genre, description, price, datepublished, bookId]
      );

      if(updatedBook.rows.length > 0){
        res.status(200).json(updatedBook.rows[0]);
      }else{
        res.status(404).json({message: "Book not found"});
      }

  }catch(error){
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }

});

//delete a book

app.delete("/books/:id", async(req, res)=>{
  const bookId = parseInt(req.params.id, 10);

  try{
    const deletedBook = await query(
      "DELETE FROM books WHERE id = $1",
      [bookId]
      );

      if(deletedBook.rowCount> 0){
        res.status(200).send({message: "Book deleted successfully"});
      }else{
        res.status(404).send({message: "Book not found"});
      }

  }catch(error){
    console.log(error);
    res.status(500).json({message: "Something went wrong"});
  }

});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

/*
sample book data to put into postman.
{
    "title":"The Alchemist",
    "author":"Paulo Coelho",
    "genre":"fiction, Novel, Adventure",
    "description":"The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    "price":"6",
    "datepublished":"1988-05-06"
}

{
    "title":"Frindle",
    "author":"Andrew Clements",
    "genre":"Children literature, fiction",
    "description":"Frindle is a middle-grade American children's novel written by Andrew Clements, illustrated by Brian Selznick, and published by the company Aladdin in 1996.",
    "price":"5",
    "datepublished":"1996-12-19"
}
 */