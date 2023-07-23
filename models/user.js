const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

//* need to check and change

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    phone: {
      type: String,
      default: "+380500000000",
    },
    birthday: {
      type: String,
      default: "01.01.2010",
    },
    city: {
      type: String,
      default: "Kyiv",
    },
    avatar: String,
    token: { type: String, default: "" },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: "",
      required: [true, "Verify token is required"],
    },
    favorite: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "pet",
        },
      ],
      default: [],
      required: true,
    },
    pets: {
      type: Schema.Types.ObjectId,
      ref: "pet",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
