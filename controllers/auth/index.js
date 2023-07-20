const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateUserData = require("./updateUserData");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateUserData,
  verifyEmail,
  resendVerifyEmail,
};
