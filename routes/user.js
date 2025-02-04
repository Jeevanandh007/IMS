const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const router = express.Router();
const User = require("../models/user.model");

// Initialize Passport
const initializePassport = require("../passport-config");
const { checkAuthentication } = require("../helpers/auth.helpers");
initializePassport(passport);

// User login
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  });
});

// Get current user details
router.get("/user", checkAuthentication, (req, res) => {
  User.findById(req.user.id)
    .select(["_id", "username", "email"])
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json(`Error: ${error}`));
});

// User logout
router.post("/logout", (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.json("Logging out");
  } else {
    res.json("No user to log out");
  }
});

// User registration
router.post("/register", async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });

  if (existingUser) {
    res.status(400).json(`Sorry, ${req.body.username} already choosen`);

    return;
  }

  const existingEmail = await User.findOne({ email: req.body.email });

  if (existingEmail) {
    res.status(400).json(`Sorry, ${req.body.email} is an existing user`);

    return;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    newUser
      .save()
      .then((user) => res.status(203).json(user))
      .catch((error) => res.status(400).json(`Save Error: ${error}`));
  } catch (error) {
    res.status(500).json(`Catch Error: ${error}`);
  }
});

module.exports = router;
