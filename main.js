import express from "express";
import flimRoutes from "./routes/flims.route.js";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ msg: "Hii Buddy" });
});
// CRUD FUNCTIONALITY STARTED

// Client -> MIDLEWARE -> Server

app.use("/flims", flimRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});

// DRY Principle
// KISS  Principle
