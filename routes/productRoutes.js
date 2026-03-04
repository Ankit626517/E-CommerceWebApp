const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/products", async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;   // current page
    const limit = parseInt(req.query.limit) || 100; // products per page

    const skip = (page - 1) * limit;

    const products = await Product.find()
      .skip(skip)
      .limit(limit);

    const totalProducts = await Product.countDocuments();

    res.json({
      totalProducts,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;