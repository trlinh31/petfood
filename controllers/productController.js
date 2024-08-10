const Product = require("../models/products");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("pages/index", { products });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ status: 404, message: "Product not found" });
    }

    res.render("pages/detail", { product });
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
};
