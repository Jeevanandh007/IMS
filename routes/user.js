const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const router = express.Router();
const User = require('../models/user.model');


// Initialize Passport
const initializePassport = require('../passport-config');
initializePassport(passport);

// Middleware for checking authentication

// User login
router.post('/login', (req, res, next) => {
    next();
  }, passport.authenticate('local'), (req, res) => {
    res.json({
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email
    });
  });

  