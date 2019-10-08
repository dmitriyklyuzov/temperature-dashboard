const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema(
  {
    date: String,
    temperature: String,
    humidity: String
  },
  { collection: "readings" }
);

module.exports = mongoose.model("Reading", readingSchema);
