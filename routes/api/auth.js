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

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

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
router.patch(
  "/photo",
  authenticate,
  upload.single("petPhoto") // контролер для оновлення фото тварини
);

module.exports = router;
