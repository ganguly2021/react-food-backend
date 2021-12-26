// create graphql schema for recipe
const schema = (`
  type Recipe {
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }
`);


// export graphql recipe schema
module.exports = schema