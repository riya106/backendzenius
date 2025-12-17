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
      "http://localhost:5173",              // local frontend
      "https://zenius.vercel.app"            // deployed frontend (change if needed)
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
const internshipRoutes = require("./routes/internshipRoutes");
app.use("/api/internships", internshipRoutes);

const summitRoutes = require("./routes/summitRoutes");
app.use("/api/summits", summitRoutes);

const hackathonRoutes = require("./routes/hackathonRoutes");
app.use("/api/hackathons", hackathonRoutes);

const dsaRoutes = require("./routes/dsaRoutes");
app.use("/api/dsa", dsaRoutes);

/* =======================
   SERVER
======================= */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
