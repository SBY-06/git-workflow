const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password);
};

const comparePassword = (pass, hashed) => {
  return bcrypt.compareSync(pass, hashed);
};

const signToken = (payload) => {
  return jwt.sign(payload, "123");
};

const verifyToken = (token) => {
  return jwt.verify(token, "123");
};

module.exports = {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken,
};
