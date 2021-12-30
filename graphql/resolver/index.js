// import recipe resolver
const { recipeMutation } = require('../schema/recipe');
const recipeResolver = require('./recipe');

// create graphql root resolver
const rootResolver = {
  hello: () => "Hello from graphql.",
  ...recipeResolver
};


// export graphql root resolver
module.exports = rootResolver;