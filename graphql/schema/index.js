// import graphql
const { buildSchema } = require('graphql');
const { userSchema, userMutation } = require('./user');
const { recipeSchema, recipeMutation } = require('./recipe');

// create graphql root schema
const rootSchema = buildSchema(`
  type Query {
    hello: String!
    getRecipe: Recipe
  }

  ${userSchema}

  ${recipeSchema}

  type Mutation {

    ${recipeMutation}

    ${userMutation}
  }

`);

// export rootSchema
module.exports = rootSchema;
