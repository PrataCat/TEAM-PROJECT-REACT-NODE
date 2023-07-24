const emailValidator = require("../schemas/emailValidator");
const { addSchema, sellSchema } = require("./petValidator");

module.exports = {
  emailValidator,
  addSchema,
  sellSchema,
};
