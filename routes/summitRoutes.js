const express = require("express");
const Summit = require("../models/Summit");
const router = express.Router();

// Get all summits
router.get("/", async (req, res) => {
  try {
    const summits = await Summit.find().sort({ createdAt: -1 });
    res.json(summits);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch summits" });
  }
});

// Get summit by ID
router.get("/:id", async (req, res) => {
  try {
    const summit = await Summit.findById(req.params.id);
    if (!summit) return res.status(404).json({ error: "Summit not found" });
    res.json(summit);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch summit details" });
  }
});

// Create a new summit
router.post("/", async (req, res) => {
  try {
    const summit = new Summit(req.body);
    await summit.save();
    res.json(summit);
  } catch (err) {
    res.status(500).json({ error: "Failed to create summit" });
  }
});

module.exports = router;
