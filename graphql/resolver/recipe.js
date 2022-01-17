// import recipe model
const Recipe = require('./../../models/Recipe');
const User = require('./../../models/User');

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
    const doc = await Recipe.find().sort({ createdDate: "desc" });

    // return document
    return doc;
  },
  getRecipe: async ({ _id }) => {
    // get recipe by id document
    const doc = await Recipe.findOne({ _id: _id });

    // return document
    return doc;
  },
  searchRecipes: async ({ searchText }) => {
    let doc = null;

    if (searchText) {
      // get recipes from search result
      doc = await Recipe.find({
        $text: { $search: searchText }
      }, {
        score: { $meta: "textScore" }
      }).sort({
        score: { $meta: "textScore" }
      });

    } else {
      // get all recipes
      doc = await Recipe.find({}).sort({ likes: 'desc', createdDate: 'desc' });
    }

    // return document
    return doc;
  },
  getUserRecipes: async ({ username }) => {
    let recipes = null;

    // find recipes based on username
    recipes = await Recipe.find({ username: username }).sort({ createdDate: 'desc' });

    return recipes;
  },
  deleteUserRecipe: async ({ id }) => {

    const recipe = await Recipe.findOneAndDelete({ _id: id });

    return recipe;
  },
  likeRecipe: async ({ username, recipeID }) => {
    // increment like count of recipe
    const recipe = await Recipe.findByIdAndUpdate(recipeID, { $inc: { likes: 1 } });

    // add recipe id to user favourites
    const user = await User.findOneAndUpdate({ username }, { $addToSet: { favourites: recipeID } });


    return recipe;
  },
  unlikeRecipe: async ({ username, recipeID }) => {
    // decrement like count of recipe
    const recipe = await Recipe.findByIdAndUpdate(recipeID, { $inc: { likes: -1 } });

    // add recipe id to user favourites
    const user = await User.findOneAndUpdate({ username }, { $pull: { favourites: recipeID } });


    return recipe;
  }
};


// export module
module.exports = recipeResolver;