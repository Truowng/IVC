require('dotenv').config();
// console.log(process.env);

const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database!');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
