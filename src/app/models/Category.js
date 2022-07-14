const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    name: {
      type: String,
      maxLength: 255,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", Category);
