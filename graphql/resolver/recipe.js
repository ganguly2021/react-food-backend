// import recipe model
const Recipe = require('./../../models/Recipe');

// create all the recipe resolver
// for graphql

const recipeResolver = {
  addRecipe: async (body) => {
    const newRecipe = new Recipe({
      name: body.name,
      description: body.description,
      category: body.category,
      instructions: body.instructions,
      username: body.username
    });

    // save new recipe in mongodb
    const doc = await newRecipe.save();

    // return document 
    // that saved into database
    return doc;

  },
  getAllRecipes: async () => {
    // get all recipe document
    const doc = await Recipe.find();

    // return document
    return doc;
  }
};


// export module
module.exports = recipeResolver;