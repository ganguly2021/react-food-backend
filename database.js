// import mongoose
const mongoose = require('mongoose');
const db_url = process.env.DB_URL;

// connect to mongodb database
mongoose.connect(db_url)
  .then(link => {
    console.log("Database connection established.");
  }).catch(error => {
    console.log("Fail to establish database connection.");
  });


