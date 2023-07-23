const httpError = require("./httpError");

const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  if (name === "MongoServerError" && code === 11000) {
    next(httpError(409, error.message));
  }

  if (error) {
    next(error);
  }

  next();
};

module.exports = handleMongooseError;
