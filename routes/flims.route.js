import express from "express";
import {
  Flimcreate,
  Flimdelete,
  Flimindex,
  Flimupdate,
} from "../controllers/flims.controllers";

const router = express.Router();

// R - For Reading

router.get("/", Flimindex);

// C - For Creating

router.post("/", Flimcreate);

// U - For Updating

router.put("/:id", Flimupdate);

// D - For Deleting

router.delete("/:id", Flimdelete);

export default router;
