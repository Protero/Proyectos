require("./config/db");
const express = require("express");
const app = express();
const {PORT} = require("./constants");
const path = require('path');


app.use(express.json());

app.use("/astronomy",require("./routes"));

app.listen(PORT,()=>{
    console.log(`> Open server http://localhost:${PORT}`);
})

