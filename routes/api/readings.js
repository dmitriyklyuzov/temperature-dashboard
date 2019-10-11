const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Reading = require("../../models/Reading");

// Get temperature readings
router.get("/", async (req, res) => {
  try {
    let readings = await Reading.find()
      .sort({ date: "-1" })
      .limit(20);

    if (readings) {
      console.log("records found");
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

// Add temperature reading
router.post("/", async (req, res) => {
  try {
    let reading = new Reading({
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      date: new Date()
    });

    await reading.save(function(err, res) {
      console.log(res);
    });

    res.status(201).send();
  } catch (e) {
    res.status(500).json(e.message);
  }
});

// Delete temperature reading
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Trying to delete id ${req.params.id}`);

    let reading = new Reading();

    console.log("instantiated reading");

    let id = new mongoose.Types.ObjectId(req.params.id);

    console.log("ObjectId is");
    console.log(id);

    // try deleting by id
    // await reading.deleteOne({
    //   _id: new mongoose.Types.ObjectId(req.params.id)
    // });

    await reading.deleteOne(
      { _id: new mongoose.Types.ObjectId(req.params.id) },
      function(err) {
        if (!err) {
          // console.log("Successfully deleted");
          console.log('No error');
          console.log(res);
        } else {
          console.log("Err :(!");
        }
      }
    );

    res.status(200).send();
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
