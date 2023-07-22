const Pet = require("../../models/pet");

const addFavorite = async (req, res) => {
  const { petId } = req.params;
  console.log('req.params', req.params)

  const result = await Pet.findByIdAndUpdate(
    petId,
    //* add the code for adding the user ID to the array of favorites,
    { new: true }
  );

  res.status(200).json(result);
};

module.exports = addFavorite;
