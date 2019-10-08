const express = require("express");
const router = express.Router();

const Reading = require("../../models/Reading");

// Get temps
router.get("/", async (req, res) => {
  console.log("get method called!");
  try {
    let readings = await Reading.find()
      .sort({ date: "-1" })
      .limit(20);

    if (readings) {
      console.log("records found!");
      return res.send(readings);
    } else {
      return res.status(500).json("Could not read data");
    }
  } catch (e) {
    console.error(e.message);
    // res.status(500).json("Server error");
    res.status(500).json(e.message);
  }
});

// Add temps

// Delete temps

async function loadTempsCollection() {
  const client = await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  return client.db("temperature").collection("readings");
}

module.exports = router;
