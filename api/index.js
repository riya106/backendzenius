// api/index.js
import express from "express";
const app = express();

app.use(express.json());

// your routes
app.get("/", (req, res) => {
  res.send("Backend Zenius is working!");
});

// export for Vercel
export default app;
