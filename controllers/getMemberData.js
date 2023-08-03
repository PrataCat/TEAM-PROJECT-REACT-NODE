const { catchAsyncWrapper } = require("../helpers");
const Pet = require("../models/pet");

const getMemberData = catchAsyncWrapper(async (req, res) => {
  const {
    _id,
    name,
    email,
    contactEmail,
    phone,
    birthday,
    city,
    avatar,
    favorite,
  } = req.user;

  const currentUser = {
    owner: _id,
  };

  const result = await Pet.find(currentUser, {
    owner: 0,
    createdAt: 0,
    updatedAt: 0,
  });

  res.json({
    user: {
      _id,
      name,
      email,
      contactEmail,
      phone,
      birthday,
      city,
      avatar,
      favorite,
    },
    pets: result.reverse(),
  });
});

module.exports = getMemberData;
