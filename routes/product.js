const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const { checkAuthentication } = require("../helpers/auth.helpers");

//read product
router.get("/", checkAuthentication, (req, res) => {
  Product.find({ userId: req.user._id })
    .then((products) => res.json(products))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

//add product

router.post("/add", (req, res) => {
  const { name, qty, um, price, weight, description } = req.body;
  const userId = req.user._id;

  const newProduct = new Product({
    name,
    qty: Number(qty),
    um,
    price: Number(price),
    weight: Number(weight),
    description,
    userId,
  });

  newProduct
    .save()
    .then((product) => res.json(product))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
