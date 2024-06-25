import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ msg: "Hii Buddy" });
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});

// DRY Principle
// KISS  Principle
