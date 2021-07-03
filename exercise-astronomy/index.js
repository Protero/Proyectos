const express = require("express");
const app = express();
const port = 3000;

require("./config/db");

app.use(express.json());

app.use("/astronomy",require("./routes"));

app.listen(port,()=>{
    console.log(`> Open server http://localhost:${port}`);
})