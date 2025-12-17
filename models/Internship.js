const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: "Remote"
  },
  category: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  stipend: {
    type: String,
    default: "Unpaid"
  },
  applyLink: {
    type: String,
    required: true
  },
  lastDate: {
    type: Date,
    required: true
  },
  skills: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Internship", InternshipSchema);
