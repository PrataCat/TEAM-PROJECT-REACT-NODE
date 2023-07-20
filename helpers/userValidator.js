const Joi = require("joi");

//* need to check and change

const userValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

module.exports = userValidator;
