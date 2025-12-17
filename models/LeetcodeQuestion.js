const mongoose = require("mongoose");

const LeetcodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("LeetcodeQuestion", LeetcodeSchema);
