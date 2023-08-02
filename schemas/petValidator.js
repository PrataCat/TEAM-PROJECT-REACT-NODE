const JoiBase = require("joi");
const JoiDate = require("@hapi/joi-date");
const Joi = JoiBase.extend(JoiDate);

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  title: Joi.string(),
  category: Joi.string().valid("my-pet").required(),
  date: Joi.date().utc().format(["YYYY-MM-DD"]).required(),
  type: Joi.string().required(),
  file: Joi.string(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

const noticeSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  title: Joi.string().required(),
  category: Joi.string().valid("sell", "lost-found", "for-free").required(),
  date: Joi.date().utc().format(["YYYY-MM-DD"]).required(),
  type: Joi.string().required(),
  file: Joi.string(),
  price: Joi.number().when("category", {
    is: Joi.string().valid("sell"),
    then: Joi.number().required().messages({
      "any.required": "The price field is required for the 'sell' category",
      "string.base": "The price field must be a string",
    }),
    otherwise: Joi.number().forbidden(),
  }),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
  phone: Joi.string().regex(
    /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/
  ),
  contactEmail: Joi.string().email(),
});

module.exports = {
  addSchema,
  noticeSchema,
};
