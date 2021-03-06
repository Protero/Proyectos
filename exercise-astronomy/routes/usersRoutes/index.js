const router = require("express").Router();
const UsersModel = require("../../models/UsersSchema");
const url = require('url');
const utils = require("../../script/index.js");

router.post("/",async(req, res, next)=>{
    let result;
    const { name, nickname, affiliatedNumber, occupation, birthdate, deleted, astronomicalPoints } = req.body;
    if (!name || !nickname || !affiliatedNumber || !occupation || !birthdate || !deleted ||  !astronomicalPoints){
        res.send("Falta algún parámetro");
    }
    result = await UsersModel.create({ name, nickname, affiliatedNumber, occupation, birthdate, deleted, astronomicalPoints });
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
    const result = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {neasDiscovered:1,_id: 0});
    res.send(result);
});
router.get("/:id/necs",async(req, res, next)=>{
    const result = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {necsDiscovered:1,_id: 0});
    res.send(result);
});
router.get("/:id/points",async(req, res, next)=>{
    let sum;
    const result = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {badges:1,_id: 0});
    console.log("> Badge/result: ", result);
    for(let i of result){ 
        sum += i.badges[0].points
    }
    res.send("puntos: ", sum);
});

router.put("/:id",async(req, res, next)=>{

    const { id } = req.params;
    const { nickname, occupation } = req.body;
    let result;
    
     if (!nickname || !occupation){
        res.send("Falta algún parámetro");
    }
    result = await UsersModel.findOneAndUpdate(
        {affiliatedNumber: id },
        {nickname,occupation},
        { new: true });
    res.send(result);
});

router.put("/:id/neas",async(req, res, next)=>{
    const { id } = req.params;
    const {neasDiscovered} = req.body;
    let result;
        
    if (!neasDiscovered ){
        res.send("Falta algún parámetro");
    }

    const resultFind = await UsersModel.find({affiliatedNumber:{$eq:req.params.id}}, {neasDiscovered:1,necsDiscovered:1, _id: 0});

    if (5 >= (resultFind[0].neasDiscovered.length + resultFind[0].necsDiscovered.length )){
        result = await UsersModel.findOneAndUpdate({affiliatedNumber: id },{$push: {neasDiscovered}},{ new: true });
        res.send(result);
        
    }
    else{
        result = await UsersModel.findOneAndUpdate(
            {affiliatedNumber: id },
            {$push: {neasDiscovered}},
            { new: true });
        res.send(result);
    }
});

router.put("/:id/delete",async(req, res, next)=>{
    const { id } = req.params;
    console.log(">ID: ",id);
    const result = await UsersModel.findOneAndUpdate({affiliatedNumber: id },{delete:true},{ new: true });
        res.send(result);
});

module.exports = router;