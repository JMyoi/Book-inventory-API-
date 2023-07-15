const express = require("express");
const app = express();
const port = 4000;
const {query} = require('./database');

app.get("/", (req, res) => {
  res.send("Welcome to the Book Inventory API!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});