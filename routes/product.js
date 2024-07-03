const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

// Middleware for checking authentication
function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json('User NOT authorized');
  }

  //read product
  router.get('/', checkAuthentication, (req, res) => {
    Product.get({ userId: req.user._id })
    .then(products=> res.json(products))
    .catch(error => res.status(400).json(`Error: ${error}`));
  });

  //add product
  
