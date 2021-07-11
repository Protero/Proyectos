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

router.get("/:id",async(req, res, next)=>{
    const result = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {name:1, nickname:1, affiliatedNumber:1, occupation:1, birthdate:1,_id: 0});
    let resultNewObj = {};
    for(let i of result){ 
        resultNewObj["name"] = i.name;
        resultNewObj["nickname"] = i.nickname;
        resultNewObj["affiliatedNumber"] = i.affiliatedNumber;
        resultNewObj["occupation"] = i.occupation;
        resultNewObj["birthdate"] =  new Date(Date.now()).getFullYear()-new Date(i.birthdate).getFullYear();
    }
    res.send(resultNewObj);
});

router.get("/:id/badges",async(req, res, next)=>{
    const result = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {badges:1, _id: 0});
    res.send(result);
});
router.get("/:id/neas",async(req, res, next)=>{
    console.log(req.params.id);
    const result = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {neasDiscovered:1,_id: 0});
    res.send(result);
});


module.exports = router;