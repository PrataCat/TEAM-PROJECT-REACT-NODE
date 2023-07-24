const express = require("express");

const { addPet, removePet } = require("../../controllers/pets");

const {
  validateBody,
  validatePetById,
  authenticate,
} = require("../../middlewares");

const { addSchema } = require("../../schemas");

const router = express.Router();

router.use("/", authenticate);

router.post("/", validateBody(addSchema), addPet);

router.delete("/:petId", validatePetById, removePet);

module.exports = router;
