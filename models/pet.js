const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const Joi = require("joi");

//* need to check and change

const petSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    favorite: {
      type: Array,
      default: [],
      required: true,
    },
    title: {
      type: String,
      default: "This is my lovely pet",
    },
    category: {
      type: String,
      enum: ["sell", "lost-found", "for-free", "my-pet"],
      default: "sell",
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
    sex: {
      type: String,
      enum: ["male", "female"],
      default: "female",
      required: true,
    },
    location: {
      type: String,
      default: "Kyiv",
    },
    price: {
      type: Number,
      default: 0,
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

const addSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  category: Joi.string().required(),
  date: Joi.string().required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

const sellSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  category: Joi.string().required(),
  date: Joi.string().required(),
  type: Joi.string().required(),
  file: Joi.string().required(),
  price: Joi.number().required(),
  sex: Joi.string().required(),
  location: Joi.string(),
  comments: Joi.string().max(120),
});

const Pet = model("pet", petSchema);

module.exports = { Pet, addSchema, sellSchema };
