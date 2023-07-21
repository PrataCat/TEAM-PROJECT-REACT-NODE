const express = require("express");

const {
  register,
  login,
  logout,
  getCurrentUser,
  updateUserAvatar,
  updateUser,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const {
  validateRegister,
  validateLogin,
  authenticate,
  validateEmail,
  upload,
  validateUpdateUser,
} = require("../../middlewares");

const router = express.Router();

router.post("/register", validateRegister(), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validateEmail(), resendVerifyEmail);
router.post("/login", validateLogin(), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrentUser);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateUserAvatar
);
router.patch("/update", authenticate, validateUpdateUser(), updateUser);
// upload.array([{name: "avatar", maxCount: 1}, {name: "emblem", maxCount: 1}])
// upload.fields("avatar", <max number of files>)

module.exports = router;
