const jwt = require("jsonwebtoken");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const { JWT_KEY } = process.env;

const login = catchAsyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne(
    { email },
    {
      password: 0,
      token: 0,
      createdAt: 0,
      updatedAt: 0,
    },
    { new: true }
  );

  const id = user._id;

  const token = jwt.sign({ id }, JWT_KEY, { expiresIn: "24h" });

  await User.findByIdAndUpdate(id, { token }, { new: true });

  res.json({ user, token });
});

module.exports = login;
