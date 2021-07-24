const express = require("express");
const mongoose = require("mongoose");
var debug = require('debug')('app');

const {PORT} = require('./constants');

require('./db');

const app = express();

app.listen(PORT, () => {
    debug(`Server starte http://localhost:${PORT}`); 
  });