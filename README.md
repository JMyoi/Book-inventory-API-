# Book-inventory-API-
Assignment: Building a Book Inventory Management API

Objective: Create a Book Inventory Management API using Node.js, Express.js, and PostgreSQL to perform CRUD operations on book data.

Instructions:

Set up a Node.js project with Express.js and PostgreSQL.

Initialize a new Node.js project using npm or yarn.
Install the necessary dependencies such as Express.js and the PostgreSQL library (pg).
Set up a basic Express.js server.
Create a PostgreSQL database and set up the necessary tables.

Using the psql command-line utility or a database management tool like DBeaver or pgAdmin, create a new PostgreSQL database for the book inventory management.
Design the necessary tables to store book data. For example, you can have a table named books with columns such as id, title, author, genre, and quantity. Be mindful of the data types and constraints when creating the tables.
Implement the API endpoints to perform CRUD operations on books.

Set up the necessary Express.js routes and handlers to handle CRUD operations.
Create a route to retrieve all books from the database (GET /books).
Create a route to retrieve a specific book by ID from the database (GET /books/:id).
Create a route to add a new book to the database (POST /books).
Create a route to update a book by ID in the database (PATCH /books/:id).
Create a route to delete a book by ID from the database (DELETE /books/:id).
Use SQL queries to interact with the PostgreSQL database and perform the necessary CRUD operations.
Test the API endpoints using Postman.

Use Postman or any API testing tool to send requests to the API endpoints. (add screenshots in the repo README of your sucessful API calls)
Test each endpoint (GET, POST, PATCH, DELETE) with different scenarios to ensure they function correctly.
Verify that the API endpoints are correctly interacting with the PostgreSQL database and returning the expected results.


Deliverable:

A Node.js and Express.js application with the PostgreSQL database connection established.
The "books" table created in the PostgreSQL database.
CRUD routes implemented for the bookstore inventory API.
Successful test results from Postman, including valid request responses.


Postman testing API
<p>Post</p>
  <img width="778" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/d50b6035-a562-4e6f-80ce-bae68f7366f7">
<p>Get</p>
<img width="778" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/e67979ae-287c-4e93-883a-0fbbfe07b010">
<p>Get</p>
<img width="772" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/bd900d06-29d4-4e5c-8536-ad251f53897b">
<img width="779" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/cf03a1a8-7ca8-411c-afc5-200f374ce2f0">

<p>Patch</p>
<img width="777" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/7f7cc4df-45d0-4d66-9e21-a613aaa527ab">
<img width="774" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/16dc022a-00be-480a-95e3-5bd7ba7a59af">

<p>Delete</p>
<img width="784" alt="image" src="https://github.com/JMyoi/Book-inventory-API-/assets/127246162/a9d6f7f6-94d9-428f-bc39-07838f5582f2">





