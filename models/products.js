const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image_url: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
