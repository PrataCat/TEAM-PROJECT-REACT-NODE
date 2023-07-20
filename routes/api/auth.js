const express = require("express");

const {
  register,
  login,
  logout,
  getCurrentUser,
  updateUserData,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const {
  validateUser,
  authenticate,
  validateEmail,
  upload,
} = require("../../middlewares");

const router = express.Router();

router.post("/register", validateUser(), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validateEmail(), resendVerifyEmail);
router.post("/login", validateUser(), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrentUser);
router.patch("/avatars", authenticate, upload.single("avatar"), updateUserData);
// upload.array([{name: "avatar", maxCount: 1}, {name: "emblem", maxCount: 1}])
// upload.fields("avatar", <max number of files>)

module.exports = router;
