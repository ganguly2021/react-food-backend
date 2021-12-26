// create graphql schema for user
const schema = (`
  type User {
    username: String!
    password: String!
    email: String!
    joinDate: String
    favourites: [Recipe]
  }
`);


// export graphql user schema
module.exports = schema