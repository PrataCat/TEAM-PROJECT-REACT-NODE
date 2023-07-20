const Joi = require("joi");

//* need to change

const favoriteValidator = (data) => {
  const schema = Joi.object({
    favorite: Joi.boolean().required(),
  });

  return schema.validate(data);
};

module.exports = favoriteValidator;
