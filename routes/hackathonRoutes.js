const express = require("express");
const router = express.Router();
const Hackathon = require("../models/Hackathon");

// Add 1 hackathon
router.post("/", async (req, res) => {
  try {
    const newHackathon = new Hackathon(req.body);
    await newHackathon.save();
    res.status(201).json({ message: "Hackathon Added", newHackathon });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add multiple hackathons (bulk insert)
router.post("/bulk", async (req, res) => {
  try {
    const hackathons = await Hackathon.insertMany(req.body);
    res.status(201).json({
      message: "Bulk Hackathons Added Successfully",
      count: hackathons.length,
      hackathons
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all hackathons
router.get("/", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.json(hackathons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

