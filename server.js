const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(
  cors({
    origin: [
      "http://localhost:5173",     // local frontend
      "https://zenius.vercel.app"  // deployed frontend
    ],
    credentials: true,
  })
);

app.use(express.json());

/* =======================
   DATABASE CONNECTION
======================= */
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Mongo Error:", err));

/* =======================
   TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.send("Zenius Backend Running...");
});

/* =======================
   ROUTES
======================= */
app.use("/api/internships", require("./routes/internshipRoutes"));
app.use("/api/summits", require("./routes/summitRoutes"));
app.use("/api/hackathons", require("./routes/hackathonRoutes"));
app.use("/api/dsa", require("./routes/dsaRoutes"));

/* =======================
   EXPORT APP (VERCEL)
======================= */
module.exports = app;
