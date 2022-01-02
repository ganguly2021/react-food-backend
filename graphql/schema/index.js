// import graphql
const { buildSchema } = require('graphql');
const { userSchema, userMutation, userQuery } = require('./user');
const { recipeSchema, recipeMutation, recipeQuery } = require('./recipe');

// create graphql root schema
const rootSchema = buildSchema(`
  type Query {
    ${userQuery}

    ${recipeQuery}
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
