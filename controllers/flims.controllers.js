// MVC -> MODULE VIEW CONTROLLERS

// R - For Reading
export const Flimindex = (req, res) => {
  res.send("Getting all Flims");
};

// C - For Creating
export const Flimcreate = (req, res) => {
  res.send("Creating all Flims");
};

// U - For Updating
export const Flimupdate = (req, res) => {
  res.send("Updating all Flims");
};

// D - For Deleting
export const Flimdelete = (req, res) => {
  res.send("Deleting all Flims");
};
