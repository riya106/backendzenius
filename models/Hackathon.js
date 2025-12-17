const mongoose = require("mongoose");

const HackathonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  desc: { type: String, required: true },
});

module.exports = mongoose.model("Hackathon", HackathonSchema);
