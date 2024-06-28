import express from "express";
import flimRoutes from "./routes/flims.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 8000;

// Connect Database

connectDB();

// Middleware for data understanding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
