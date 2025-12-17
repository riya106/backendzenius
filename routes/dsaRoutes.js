const express = require("express");
const router = express.Router();

const Syllabus = require("../models/Syllabus");
const Roadmap = require("../models/Roadmap");
const PracticeSheet = require("../models/PracticeSheet");
const LeetcodeQuestion = require("../models/LeetcodeQuestion");


// ------------------------------
//        SYLLABUS ROUTES
// ------------------------------

// GET all syllabus topics
router.get("/syllabus", async (req, res) => {
  try {
    const syllabus = await Syllabus.find();
    res.json(syllabus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST syllabus topic
router.post("/syllabus", async (req, res) => {
  try {
    const newTopic = new Syllabus(req.body);
    await newTopic.save();
    res.status(201).json({ message: "Syllabus Topic Added", newTopic });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ------------------------------
//         ROADMAP ROUTES
// ------------------------------

// GET roadmap
router.get("/roadmap", async (req, res) => {
  try {
    const roadmap = await Roadmap.find();
    res.json(roadmap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST roadmap
router.post("/roadmap", async (req, res) => {
  try {
    const newRoadmap = new Roadmap(req.body);
    await newRoadmap.save();
    res.status(201).json({ message: "Roadmap Added", newRoadmap });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ------------------------------
//      PRACTICE SHEET ROUTES
// ------------------------------

// GET practice sheets
router.get("/practiceSheets", async (req, res) => {
  try {
    const sheets = await PracticeSheet.find();
    res.json(sheets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST practice sheet
router.post("/practiceSheets", async (req, res) => {
  try {
    const newSheet = new PracticeSheet(req.body);
    await newSheet.save();
    res.status(201).json({ message: "Practice Sheet Added", newSheet });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ------------------------------
//     LEETCODE QUESTIONS ROUTES
// ------------------------------

// GET LeetCode questions
router.get("/leetcodeQuestions", async (req, res) => {
  try {
    const questions = await LeetcodeQuestion.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST LeetCode question
router.post("/leetcodeQuestions", async (req, res) => {
  try {
    const newQuestion = new LeetcodeQuestion(req.body);
    await newQuestion.save();
    res.status(201).json({ message: "LeetCode Question Added", newQuestion });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

