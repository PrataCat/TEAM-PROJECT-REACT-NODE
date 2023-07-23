const { favoriteValidator, httpError } = require("../../helpers");
const Pet = require("../../models/pet");

//* need to check and change

const getSomePets = async (req, res, next) => {
  const currentOwner = {
    owner: req.user._id,
  };

  const { page = 1, limit = 10, favorite = "" } = req.query;

  if (favorite) {
    const { error } = favoriteValidator({ favorite });
    console.log(error);

    if (error) {
      return next(httpError(400, "Bad request"));
    }

    currentOwner.favorite = favorite;
  }

  const skip = (page - 1) * limit;

  const result = await Pet.find(currentOwner, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  res.status(200).json(result);
};

module.exports = getSomePets;
