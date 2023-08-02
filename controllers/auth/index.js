const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateUser = require("./updateUser");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateUser,
  verifyEmail,
  resendVerifyEmail,
};
