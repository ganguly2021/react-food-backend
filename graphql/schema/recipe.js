// create graphql schema for recipe
const recipeSchema = (`
  type Recipe {
    _id: ID
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

// create graphql query for recipe
const recipeQuery = (`
  getAllRecipes: [Recipe]
  getRecipe(_id: ID!): Recipe
  searchRecipes(searchText: String!): [Recipe]
`);


// export graphql recipe schema
module.exports = {
  recipeSchema,
  recipeMutation,
  recipeQuery
}