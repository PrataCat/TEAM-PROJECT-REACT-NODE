const JoiBase = require("joi");
const JoiDate = require("@hapi/joi-date");
const Joi = JoiBase.extend(JoiDate);

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  title: Joi.string(),
  category: Joi.string().required(),
  date: Joi.date().utc().format(["DD.MM.YYYY"]).required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

const sellSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  title: Joi.string().required(),
  category: Joi.string().required(),
  date: Joi.date().utc().format(["DD.MM.YYYY"]).required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  price: Joi.number().required(),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

const lostOrInGoodHandsSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  title: Joi.string().required(),
  category: Joi.string().required(),
  date: Joi.date().utc().format(["DD.MM.YYYY"]).required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

module.exports = { addSchema, sellSchema, lostOrInGoodHandsSchema };
