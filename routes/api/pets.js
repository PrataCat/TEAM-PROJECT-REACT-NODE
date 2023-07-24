const express = require("express");

const { addPet, removePet } = require("../../controllers/pets");

const {
  validateBody,
  validateById,
  authenticate,
} = require("../../middlewares");

const { addSchema } = require("../../schemas");

const router = express.Router();

router.use("/", authenticate);

router.post("/", validateBody(addSchema), addPet);

router.delete("/:petId", removePet);

module.exports = router;
