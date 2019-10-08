const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get temps
router.get("/", (req, res) => {
  res.send("hello");
});

// Add temps

// Delete temps

module.exports = router;