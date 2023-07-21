const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const updateUserAvatar = require("./updateUserAvatar");
const updateUser = require("./updateUser");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
  updateUserAvatar,
  updateUser,
  verifyEmail,
  resendVerifyEmail,
};
