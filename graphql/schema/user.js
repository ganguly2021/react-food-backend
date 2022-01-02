// create graphql schema for user
const userSchema = (`
  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String
    favourites: [Recipe]
  }

  type Token {
    token: String!
  }
`);

// create graphql mutation for user
const userMutation = (`
  signupUser(
    username: String!,
    email: String!,
    password: String!
  ): Token

  signinUser(
    username: String!,
    password: String!
  ): Token

`);

// create graphql query for user
const userQuery = (`
  getCurrentUser: User
`);

// export graphql user schema
module.exports = {
  userSchema,
  userMutation,
  userQuery
}