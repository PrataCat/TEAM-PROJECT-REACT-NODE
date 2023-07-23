const Joi = require("joi");

const emailValidator = Joi.object({ email: Joi.string().email().required() });

module.exports = emailValidator;
