const { isValidObjectId } = require("mongoose");

const { httpError } = require("../helpers");

const validateId = (idName) => {
  const fn = (req, res, next) => {
    const id = req.params[idName];

    if (!isValidObjectId(id)) return next(httpError(400, "Invalid id"));

    next();
  };
  
  return fn;
};

module.exports = validateId;
