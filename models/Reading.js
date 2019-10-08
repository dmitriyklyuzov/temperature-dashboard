const mongoose = require("mongoose");

const readingSchema = new mongoose.Schema(
  {
    date: { type: String, default: Date.now() },
    temperature: String,
    humidity: String
  },
  { collection: "readings" }
);

module.exports = mongoose.model("Reading", readingSchema);
