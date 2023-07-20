const express = require("express");

const {
  getSomePets,
  getById,
  addPet,
  removePet,
  addFavorite,
  removeFavorite,
} = require("../../controllers/pets");

const {
  validateById,
  validateBody,
  authenticate,
  validateFavorite,
} = require("../../middlewares");

const router = express.Router();

router.use("/", authenticate);
router.use("/:petId", validateById);

router.route("/").get(getSomePets).post(validateBody(), addPet);

router.route("/:petId").get(getById).delete(removePet);

router.patch("/:petId/addfavorite", validateFavorite(), addFavorite);
router.patch("/:petId/removefavorite", validateFavorite(), removeFavorite);

module.exports = router;
