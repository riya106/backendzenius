const mongoose = require("mongoose");

const RoadmapSchema = new mongoose.Schema({
  duration: { type: String, required: true },
  focus: { type: String, required: true },
});

module.exports = mongoose.model("Roadmap", RoadmapSchema);
