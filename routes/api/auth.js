const express = require("express");

const {
  register,
  login,
  logout,
  getCurrentUser,
  updateUser,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");
const getMemberData = require("../../controllers/getMemberData");

const {
  validateRegister,
  validateLogin,
  authenticate,
  upload,
  validateBody,
} = require("../../middlewares");

const { emailValidator } = require("../../schemas");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const router = express.Router();

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.post("/register", validateRegister(), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validateBody(emailValidator), resendVerifyEmail);
router.post("/login", validateLogin(), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrentUser);
router.patch("/update", authenticate, upload.single("avatar"), updateUser);
router.get("/pets", authenticate, getMemberData);

module.exports = router;
