const emailValidator = require("../schemas/emailValidator");
const {
  addSchema,
  // sellSchema,
  noticeSchema,
  // lostAndInGoodHandsSchema,
} = require("./petValidator");
const {
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
} = require("./userValidator");

module.exports = {
  emailValidator,
  addSchema,
  // sellSchema,
  noticeSchema,
  // lostAndInGoodHandsSchema,
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
};
