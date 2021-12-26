// import graphql
const { buildSchema } = require('graphql');
const userSchema = require('./user');
const recipeSchema = require('./recipe');

// create graphql root schema
const rootSchema = buildSchema(`
  type Query {
    hello: String!
    getRecipe: Recipe
  }

  ${userSchema}

  ${recipeSchema}

`);

// export rootSchema
module.exports = rootSchema;
