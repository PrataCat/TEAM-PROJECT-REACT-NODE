const Joi = require("joi");

const petValidator = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    category: Joi.string().required(),
    date: Joi.string().required(),
    type: Joi.string().required(),
    file: Joi.string().required(),
    sex: Joi.string().required(),
    location: Joi.string(),
    comments: Joi.string().max(120),
  });

  return schema.validate(data);
};

// const petSellValidator = (data) => {
//   const schema = Joi.object({
//     name: Joi.string().min(2).max(20).required(),
//     category: Joi.string().required(),
//     date: Joi.string().required(),
//     type: Joi.string().required(),
//     file: Joi.string().required(),
//     price: Joi.number().required(),
//     sex: Joi.string().required(),
//     location: Joi.string(),
//     comments: Joi.string().max(120),
//   });

//   return schema.validate(data);
// };

module.exports = petValidator;
// module.exports = { petValidator, petSellValidator };
