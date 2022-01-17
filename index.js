// env file setup
require('dotenv/config');

// import express
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT;
const database = require('./database');

// graphql setup
const { graphqlHTTP } = require('express-graphql');
const rootSchema = require('./graphql/schema');
const rootResolver = require('./graphql/resolver');

const { isValidToken } = require('./helper/auth');

const corsOption = {
  origin: process.env.FRON_END_URL,
  credentials: true
}

// middleware setup
app.use(cors(corsOption));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(isValidToken);

// graphql server start
app.use('/graphql', graphqlHTTP((req, res, graphQLParams) => {

  return {
    schema: rootSchema,
    rootValue: rootResolver,
    // graphiql: true,
    context: {
      currentUser: req.currentUser
    }
  }
}));


// routes
app.get('/', (req, res) => {
  return res.status(200).json({
    status: true,
    code: 200,
    message: "api route working."
  });
});

if ( process.env.NODE_ENV === 'production' ){
  // set static directory
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// start web server
app.listen(port, () => {
  console.log(`Web server running at port: ${port}`);
  console.log(`URL: http://localhost:${port}`);
});