// create graphql schema for recipe
const recipeSchema = (`
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

// create graphql mutation for recipe
const recipeMutation = (`
  addRecipe(
    name: String!, 
    description: String!, 
    category: String!,
    instructions: String!
    username: String
    ): Recipe
  
`);


// export graphql recipe schema
module.exports = {
  recipeSchema,
  recipeMutation
}