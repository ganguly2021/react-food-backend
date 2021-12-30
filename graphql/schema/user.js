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


const userMutation = (`
  signupUser(
    username: String!,
    email: String!,
    password: String!
  ): Token
`);

// export graphql user schema
module.exports = {
  userSchema,
  userMutation
}