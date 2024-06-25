import express from "express";

const router = express.Router();

// R - For Reading

router.get("/", (req, res) => {
  res.send("Getting all Flims");
});

// C - For Creating

router.post("/", (req, res) => {
  res.send("Creating all Flims");
});

// U - For Updating

router.put("/:id", (req, res) => {
  res.send("Updating all Flims");
});

// D - For Deleting

router.delete("/:id", (req, res) => {
  res.send("Deleting all Flims");
});

export default router;
