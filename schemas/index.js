const emailValidator = require("../schemas/emailValidator");
const { addSchema, sellSchema } = require("./petValidator");
const {
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
} = require("./userValidator");

module.exports = {
  emailValidator,
  addSchema,
  sellSchema,
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
};
