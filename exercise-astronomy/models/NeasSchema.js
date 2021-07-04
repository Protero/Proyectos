const mongoose = require("mongoose");
const { Schema } = mongoose;

const NeasSchema = new Schema({
  designation: {
    type: String,
  },
  discovery_date: {
    type: String,
  },
  h_mag: {
    type: Number,
  },
  moid_au: {
    type: Number,
  },
  q_au_1: {
      type: Number,
  },
  q_au_2: {
    type: Number,
  },
  period_yr: {
    type: Number,
  },
  i_deg: {
    type: Number,
  },
  pha: {
    type: String,
  },
  orbit_class: {
    type: String,
  },
});

const neas = mongoose.model("neas", NeasSchema);

module.exports = neas;