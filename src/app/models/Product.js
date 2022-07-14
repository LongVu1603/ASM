const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var URLSlug = require("mongoose-slug-generator");
mongoose.plugin(URLSlug);

const Product = new Schema(
  {
    name: {
      type: String,
      maxLength: 255,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
    images: [
      {
        type: String,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    title: {
      type: String,
    },
    slug: {
      type: String,
      slug: "name",
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

Product.pre("save", function (next) {
  this.slug = this.name.split(" ").join("-");
  next();
});

module.exports = mongoose.model("Product", Product);
