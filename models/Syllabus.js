const mongoose = require("mongoose");

const SyllabusSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  subtopics: { type: String, required: true },
});

module.exports = mongoose.model("Syllabus", SyllabusSchema);
