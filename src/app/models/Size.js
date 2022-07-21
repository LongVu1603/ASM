const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Size = new Schema(
  {
    name: {
      type: String,
      maxLength: 255,
      required: true,
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

module.exports = mongoose.model("Size", Size);
