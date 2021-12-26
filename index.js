// env file setup
require('dotenv/config');

// import express
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;

const database = require('./database');


// middleware setup
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  return res.status(200).json({
    status: true,
    code: 200,
    message: "api route working."
  });
});


// start web server
app.listen(port, () => {
  console.log(`Web server running at port: ${port}`);
  console.log(`URL: http://localhost:${port}`);
});