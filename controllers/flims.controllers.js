// MVC -> MODULE VIEW CONTROLLERS

import flim from "../models/flim.model.js";

// R - For Reading
export const Flimindex = async (req, res) => {
  try {
    const flims = await flim.find();
    res.json(flims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// C - For Creating
export const Flimcreate = async (req, res) => {
  // id,title,desc

  // validate the data
  const newflim = new flim({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const flim = await newflim.save();
    return res.status(201).json(flim);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Getting specific by ID

export const Flimdetails = async (req, res) => {
  try {
    const flims = await flim.findById(req.params.id);
    if (flim == null) {
      return res.status(404).json({ message: "cannot find flim" });
    } else {
      res.json(flims);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// U - For Updating
export const Flimupdate = async (req, res) => {};

// D - For Deleting
export const Flimdelete = (req, res) => {
  res.send("Deleting all Flims");
};
