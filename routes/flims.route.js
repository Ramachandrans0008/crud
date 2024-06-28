import express from "express";
import {
  Flimcreate,
  Flimdelete,
  Flimindex,
  Flimdetails,
  Flimupdate,
} from "../controllers/flims.controllers.js";

const router = express.Router();

// R - For Reading
// This is for getting whole items
router.get("/", Flimindex);
// This is for getting specific one using ID

router.get("/:id", Flimdetails);

// C - For Creating

router.post("/", Flimcreate);

// U - For Updating

router.put("/:id", Flimupdate);

// D - For Deleting

router.delete("/:id", Flimdelete);

export default router;
