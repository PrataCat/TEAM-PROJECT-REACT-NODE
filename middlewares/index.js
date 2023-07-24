const validateId = require("./validateId");
const validateBody = require("./validateBody");
const validateFavorite = require("./validateFavorite");
const validateRegister = require("./validateRegister");
const validateLogin = require("./validateLogin");
const authenticate = require("./authenticate");
const validateEmail = require("./validateEmail");
const upload = require("./upload");
const validateUpdateUser = require("./validateUpdateUser");

module.exports = {
  validateBody,
  validateFavorite,
  validateRegister,
  validateLogin,
  authenticate,
  validateEmail,
  upload,
  validateUpdateUser,
  validateId,
};
