const{Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    datePublished DATE NOT NULL
);
`;

const createBooksTable = async () => {
    try {
        await pool.query(createTableQuery);
        console.log('table created successfully');
    } catch (error) {
        console.error('error creating table', error);
    }
};

createBooksTable();


module.exports = {
    query: (text, params, callback) => {
      console.log("QUERY:", text, params || "");
      return pool.query(text, params, callback);
    },
  };
