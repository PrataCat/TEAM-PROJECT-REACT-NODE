const JoiBase = require("joi");
const JoiDate = require("@hapi/joi-date");
const Joi = JoiBase.extend(JoiDate);

const userRegisterValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const userLoginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const updateUserValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email(),
    contactEmail: Joi.string().email(),
    password: Joi.string().min(6),
    birthday: Joi.date().utc().format(["DD.MM.YYYY"]),
    phone: Joi.string().regex(
      /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/
    ),
    city: Joi.string().min(3),
  });

  return schema.validate(data);
};

module.exports = {
  userRegisterValidator,
  userLoginValidator,
  updateUserValidator,
};
