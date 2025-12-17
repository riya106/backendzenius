const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

// ADD Internship
router.post("/", async (req, res) => {
  try {
    const newInternship = new Internship(req.body);
    await newInternship.save();
    res.status(201).json({ message: "Internship added", newInternship });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET All Internships
router.get("/", async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET Single Internship by ID
router.get("/:id", async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE Internship
router.put("/:id", async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Internship updated", internship });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE Internship
router.delete("/:id", async (req, res) => {
  try {
    await Internship.findByIdAndDelete(req.params.id);
    res.json({ message: "Internship deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
