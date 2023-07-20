const fs = require("fs/promises");
const path = require("path");
const jimp = require("jimp");

const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const CustomError = require("../../helpers/CustomError");
const User = require("../../models/user");

//* need to check and change

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateUserData = catchAsyncWrapper(async (req, res, next) => {
  console.log(req.file);

  if (!req.file) {
    return new CustomError(400, "Missing 'avatar' field");
  }

  const img = await jimp.read(req.file.path);

  await img
    .autocrop()
    .cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE)
    .writeAsync(req.file.path);

  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;

  const fileName = `${_id}_${originalname}`;

  const resUpload = path.join(avatarsDir, fileName);

  await fs.rename(tempUpload, resUpload);

  const avatarURL = path.join("avatars", fileName);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL: avatarURL,
  });
});

module.exports = updateUserData;
