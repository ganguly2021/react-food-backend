// import graphql
const { buildSchema } = require('graphql');

// create graphql root schema
const rootSchema = buildSchema(`
  type Query {
    hello: String!
  }
`);

// export rootSchema
module.exports = rootSchema;
