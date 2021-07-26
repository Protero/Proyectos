const express = require("express");
const mongoose = require("mongoose");
const debug = require('debug')('app');
const passport = require('passport');
const bodyParser = require("body-parser");

const {PORT} = require('./constants');
const routes = require('./routes');

require('./db/index');
require('./auth/index');

const app = express();

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
  });

app.listen(PORT, () => {
    debug(`Server starte http://localhost:${PORT}`); 
  });