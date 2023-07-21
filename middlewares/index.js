const validateById = require("./validateById");
const validateBody = require("./validateBody");
const validateFavorite = require("./validateFavorite");
const validateRegister = require("./validateRegister");
const validateLogin = require("./validateLogin");
const authenticate = require("./authenticate");
const validateEmail = require("./validateEmail");
const upload = require("./upload");
const validateUpdateUser = require("./validateUpdateUser");

module.exports = {
  validateById,
  validateBody,
  validateFavorite,
  validateRegister,
  validateLogin,
  authenticate,
  validateEmail,
  upload,
  validateUpdateUser,
};
