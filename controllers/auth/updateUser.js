const { httpError } = require("../../helpers");
const User = require("../../models/user");
const { updateUserValidator } = require("../../schemas");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { error } = updateUserValidator.validate(req.body);
  const file = req.file.path;

  if (error) {
    throw httpError(400, error.message);
  }

  const result = await User.findByIdAndUpdate(
    _id,
    { ...req.body, avatar: file },
    { new: true }
  );

  res.json(result);
};

module.exports = updateUser;
