const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
  affiliatedNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  affiliationDate: {
    type: Date,
  },
  occupation: {
      type: String,
  },
  birthdate: {
    type: Date,
  },
  deleted: {
    type: Boolean,
  },
  astronomicalPoints: {
    type: Date,
  },
  badges: [{
    name: {
      type: String,
    },
    given:{
      type: Boolean,
    },
    info:{
      type : String,
    },
    points:{
      type: Number,
    }, 
  }],
  neasDiscovered:{
    type : Array,
  },
  necsDiscovered:{
    type : Array,
  },
});

const users = mongoose.model("users", UsersSchema);

module.exports = users;