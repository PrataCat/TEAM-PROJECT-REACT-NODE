const User = require("../../models/user");

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const { name, contactEmail, phone, birthday, city } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    { name, contactEmail: contactEmail, phone, birthday, city },
    { new: true }
  );

  res.json({
    name: user.name,
    contactEmail: user.contactEmail,
    phone: user.phone,
    birthday: user.birthday,
    city: user.city,
  });
};

module.exports = updateUser;
