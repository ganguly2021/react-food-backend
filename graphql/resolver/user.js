// import user model
const User = require('./../../models/User');
const { createAuthToken, hashPassword, isPasswordMatch } = require('../../helper/auth');

const userResolver = {
  signupUser: async (body) => {

    // check whether username already exists or not
    const user = await User.findOne({ username: body.username })

    // if user is not null
    if (user) {
      throw new Error("User already exists.");
    }

    // create new user
    const newUser = new User({
      username: body.username,
      email: body.email,
      password: hashPassword(body.password)
    });

    // save user in database
    const doc = await newUser.save();

    const payload = {
      username: doc.username,
      email: doc.email
    }

    // return new user document
    return { token: createAuthToken(payload, '1hr') };
  },

  signinUser: async (body) => {
    // check whether username exists or not
    const user = await User.findOne({ username: body.username });

    // if user is not exists
    if (!user) {
      throw new Error("User don't exists.");
    }

    // check password is match or not
    if (!isPasswordMatch(body.password, user.password)) {
      throw new Error("User password don't match.");
    }

    const payload = {
      username: user.username,
      email: user.email
    }

    // return new user document
    return { token: createAuthToken(payload, '1hr') };
  },
  getCurrentUser: async (body, context) => {
    const currentUser = context.currentUser;

    // if currentUser is undefined
    if (currentUser === undefined) {
      return null;
    }

    // find user in data
    const user = await User.findOne({ username: currentUser.username })
      // .populate({
      //   path: 'favourites',
      //   model: 'recipes'
      // });

    // if user don't exists in database
    if (!user) {
      throw Error("User don't exists.");
    }
    
    return user
  }
};

module.exports = userResolver;