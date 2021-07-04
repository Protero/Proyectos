const mongoose = require("mongoose");
const { Schema } = mongoose;

const LandingsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  id: {
    type: Number,
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
      type: Number,
  },
  fall: {
    type: String,
  },
  year: {
    type: Date,
  },
  reclat: {
    type: Number,
  },
  reclong: {
    type: Number,
  },
  geolocation: [{
    latitude:{type: Number,},
    longitude:{type: Number,},
  }],
});

const landings = mongoose.model("landings", LandingsSchema);

module.exports = landings;