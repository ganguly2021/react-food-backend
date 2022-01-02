// import recipe resolver
const { recipeMutation } = require('../schema/recipe');
const recipeResolver = require('./recipe');
const userResolver = require('./user');

// create graphql root resolver
const rootResolver = {
  ...recipeResolver,
  ...userResolver
};


// export graphql root resolver
module.exports = rootResolver;