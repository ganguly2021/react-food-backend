// import json web token
const jwt = require('jsonwebtoken');
const token_key = process.env.TOKEN_KEY;
const bcrypt = require('bcryptjs');

const createAuthToken = (payload, expiresIn) => {
  return jwt.sign(payload, token_key, { expiresIn: expiresIn });
}

const hashPassword = (password) => {
  // generate salt value
  const salt = bcrypt.genSaltSync(10);

  // hash pasword and return
  return bcrypt.hashSync(password, salt);
}

const isPasswordMatch = (user_pass, db_pass) => {
  const isMatch = bcrypt.compareSync(user_pass, db_pass);

  return isMatch;
}

module.exports = {
  createAuthToken,
  hashPassword,
  isPasswordMatch
}