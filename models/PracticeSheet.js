const mongoose = require("mongoose");

const PracticeSheetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("PracticeSheet", PracticeSheetSchema);
