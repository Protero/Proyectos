const mongoose = require("mongoose");
const { Schema } = mongoose;

const LandingsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  id: {
    type: String,
    unique: true,
    required: true,
  },
  nametype: {
    type: String,
  },
  recclass: {
    type: String,
  },
  mass: {
      type: String,
  },
  fall: {
    type: String,
  },
  year: {
    type: String,
  },
  reclat: {
    type: String,
  },
  reclong: {
    type: String,
  },
  geolocation: [{
    latitude:{type: String,},
    longitude:{type: String,},
  }],
});

const landings = mongoose.model("landings", LandingsSchema);

module.exports = landings;