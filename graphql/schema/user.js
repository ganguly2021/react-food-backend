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
`);


const userMutation = (`
  
`);

// export graphql user schema
module.exports = {
  userSchema,
  userMutation
}