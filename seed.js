const mongoose = require("mongoose");
require("dotenv").config();

const Syllabus = require("./models/Syllabus");
const Roadmap = require("./models/Roadmap");
const PracticeSheet = require("./models/PracticeSheet");
const LeetcodeQuestion = require("./models/LeetcodeQuestion");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Example data
const syllabusData = [
  { topic: "Arrays & Strings", subtopics: "Basics, Sliding Window, Two Pointers, Prefix Sum" },
  { topic: "Linked List", subtopics: "Singly, Doubly, Circular, Reversal, Fast & Slow Pointer" },
  { topic: "Stack & Queue", subtopics: "Implementation, LIFO/FIFO, Monotonic Stack, Queue Using Stack" },
  { topic: "Recursion & Backtracking", subtopics: "Factorial, Permutations, Subsets, N-Queens, Maze Problems" },
  { topic: "Trees & Binary Trees", subtopics: "Traversal, BST, Binary Tree, Segment Tree, Tree DP" },
  { topic: "Graphs", subtopics: "DFS, BFS, Dijkstra, Bellman-Ford, Union-Find, Topological Sort" },
  { topic: "Dynamic Programming", subtopics: "Memoization, Tabulation, Knapsack, LIS, DP on Trees" },
  { topic: "Searching & Sorting", subtopics: "Binary Search, Quick Sort, Merge Sort, Heap Sort" },
];

const roadmapData = [
  { duration: "1 Month", focus: "Basics of Arrays, Strings, Linked List, Simple Problems" },
  { duration: "3 Months", focus: "Intermediate Topics: Stack, Queue, Recursion, Searching & Sorting" },
  { duration: "6 Months", focus: "Advanced Topics: Trees, Graphs, DP, Competitive Problem Solving" },
];

const practiceSheetsData = [
  { name: "Love Babbar DSA Sheet", link: "https://www.youtube.com/watch?v=AfGZkzq2yJ8" },
  { name: "Striver's SDE Sheet", link: "https://takeuforward.org/interviews/strivers-sde-sheet/" },
];

const leetcodeQuestionsData = [
  { name: "Top 100 LeetCode Questions", link: "https://leetcode.com/list/4h7u5r9w/" },
];

// Insert data
const seed = async () => {
  await Syllabus.deleteMany({});
  await Syllabus.insertMany(syllabusData);

  await Roadmap.deleteMany({});
  await Roadmap.insertMany(roadmapData);

  await PracticeSheet.deleteMany({});
  await PracticeSheet.insertMany(practiceSheetsData);

  await LeetcodeQuestion.deleteMany({});
  await LeetcodeQuestion.insertMany(leetcodeQuestionsData);

  console.log("✅ DSA Data Seeded");
  mongoose.connection.close();
};

seed();
