const CustomError = require("./CustomError");

const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  if (name === "MongoServerError" && code === 11000) {
    next(new CustomError(409, error.message));
  }

  if (error) {
    next(error);
  }

  next();
};

module.exports = handleMongooseError;
