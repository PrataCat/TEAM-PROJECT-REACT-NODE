const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  category: Joi.string().required(),
  date: Joi.string().required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

const sellSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  category: Joi.string().required(),
  date: Joi.string().required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  price: Joi.number().required(),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

module.exports = { addSchema, sellSchema };
