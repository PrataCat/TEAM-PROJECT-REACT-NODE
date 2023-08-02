const emailValidator = require("../schemas/emailValidator");
const { addSchema, noticeSchema } = require("./petValidator");
const {
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
} = require("./userValidator");

module.exports = {
  emailValidator,
  addSchema,
  noticeSchema,
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
};
