const jwt = require("jsonwebtoken");

const User = require("../models/user");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const { httpError } = require("../helpers");

const authenticate = catchAsyncWrapper(async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  if (!token) {
    return next(httpError(401, "Not authorized"));
  }

  const { id } = jwt.verify(token, process.env.JWT_KEY);
  const user = await User.findById(id);

  if (!user || !user.token) {
    return next(httpError(401, "Not authorized"));
  }

  req.user = user;

  next();
});

module.exports = authenticate;
