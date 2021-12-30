// import user model
const User = require('./../../models/User');
const { createAuthToken, hashPassword } = require('../../helper/auth');

const userResolver = {
  signupUser: async (body) => {

    // check whether username already exists or not
    const user = await User.findOne({ username: body.username });

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
  }
};

module.exports = userResolver;