const { httpError, comparePass } = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const { userLoginValidator } = require("../schemas");
const User = require("../models/user");

const validateLogin = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    console.log("login");
    const { email, password } = req.body;
    const { error } = userLoginValidator(req.body);

    if (error) {
      const err = error.details[0].path[0];

      next(httpError(400, `Missing field ${err}`));
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      next(httpError(401, "Email or password is wrong"));
      return;
    }

    if (!user.verify) {
      next(httpError(401, "Email not verified"));
      return;
    }

    const result = await comparePass(password, user.password);

    if (!result) {
      next(httpError(401, "Email or password is wrong"));
      return;
    }

    next();
  });

  return func;
};

module.exports = validateLogin;
