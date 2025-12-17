const mongoose = require("mongoose");

const SummitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organizer: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    applyLink: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Summit", SummitSchema);
