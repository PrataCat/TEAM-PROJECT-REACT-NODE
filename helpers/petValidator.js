const Joi = require("joi");

//* need to check and change

const petValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(5).max(20).required(),
    favorite: Joi.array(),
  });

  return schema.validate(data);
};

module.exports = petValidator;
