const { httpError } = require("../../helpers");
const User = require("../../models/user");
const { updateUserValidator } = require("../../schemas");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { error } = updateUserValidator.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  if (!req.file) {
    const result = await User.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true }
    );
    res.json(result);
  } else {
    const result = await User.findByIdAndUpdate(
      _id,
      { ...req.body, avatar: req.file.path },
      { new: true }
    );
    res.json(result);
  }
};

module.exports = updateUser;
