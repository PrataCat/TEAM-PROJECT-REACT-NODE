const emailValidator = require("../schemas/emailValidator");
const {
  addSchema,
  sellSchema,
  lostAndInGoodHandsSchema,
} = require("./petValidator");
const {
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
} = require("./userValidator");

module.exports = {
  emailValidator,
  addSchema,
  sellSchema,
  lostAndInGoodHandsSchema,
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
};
