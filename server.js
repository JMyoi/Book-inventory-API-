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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//Get all books

//Get book by id

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

//delete a book




/*
{
    "title":"The Alchemist",
    "author":"Paulo Coelho",
    "genre":"fiction, Novel, Adventure",
    "description":"The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    "price":"6",
    "datepublished":"1988-05-06"
}

 */