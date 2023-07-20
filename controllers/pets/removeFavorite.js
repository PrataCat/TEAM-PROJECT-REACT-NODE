const Pet = require("../../models/pet");

const removeFavorite = async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndUpdate(
    petId,
    //* add the code for deleting the user ID from the array of favorites,
    { new: true }
  );

  res.status(200).json(result);
};

module.exports = removeFavorite;
