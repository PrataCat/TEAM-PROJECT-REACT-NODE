const { httpError } = require("../helpers");


const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(
        httpError(
          400,
          `missing required ${error.details[0].path[0]} field`
        )
      );
    }
    next();
  };

  return func;
};

module.exports = validateBody;
