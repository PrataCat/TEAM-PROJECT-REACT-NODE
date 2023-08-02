const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    category: {
      type: String,
      default: "my-pet",
      required: true,
    },
    date: {
      type: String,
      default: "01.01.2020",
      required: true,
    },
    type: {
      type: String,
      default: "cat",
      required: [true, "Set type of pet or some title"],
    },
    file: {
      type: String,
      required: [true, "Add a pet's photo"],
    },
    comments: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

petSchema.post("save", handleMongooseError);

const Pet = model("pet", petSchema);

module.exports = Pet;
