const router = require("express").Router();
const UsersModel = require("../../models/UsersSchema");
const url = require('url');
const utils = require("../../script/index.js");



router.post("/",async(req, res, next)=>{
    let result;
    const { name, nickname, affiliatedNumber, occupation, birthdate } = req.body;
    if (!name || !nickname || !affiliatedNumber || !occupation || !birthdate ){
        res.send("Falta algún parámetro");
    }
    result = await UsersModel.create({ name, nickname, affiliatedNumber, occupation, birthdate });
    res.send(result);
});

module.exports = router;