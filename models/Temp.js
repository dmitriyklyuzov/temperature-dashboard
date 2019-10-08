const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
  date: String,
  temperature: String,
  humidity: String
});

module.exports = mongoose.model('Temp', tempSchema);