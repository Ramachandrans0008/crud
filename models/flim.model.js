import { Schema, model } from "mongoose";

// write the schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

// create the model

const flim = model("flim", schema);

export default flim;
