const express = require("express");

const { addPet, removePet } = require("../../controllers/pets");

const {
  validateBody,
  validateId,
  authenticate,
  upload,
} = require("../../middlewares");

const { addSchema } = require("../../schemas");

const router = express.Router();

router.use("/", authenticate);

router.post("/", validateBody(addSchema), upload.single("file"), addPet);

router.delete("/:petId", validateId("petId"), removePet);

module.exports = router;
