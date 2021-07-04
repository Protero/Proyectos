const router = require("express").Router();
const LandingsModel = require("../../models/LandingsSchema");
const url = require('url');
const utils = require("../../script/index.js");


router.get("/",async(req, res, next)=>{
    const params = url.parse(req.url,true).query;
    let result;
    let date;

    if (Object.keys(params).length < 2){
        switch(Object.keys(params)[0]){
            case "to":
                date = utils.parseDateJson(params.to);
                result = await LandingsModel.find({year:{$eq:date}}, {name:1, mass:1, year:1, _id: 0});
                res.send(result);
                break;
            case "from":
                date = utils.parseDateJson(params.from);
                result = await LandingsModel.find({year:{$eq:date}}, {name:1, mass:1, year:1, _id: 0});
                res.send(result);
                break;
            case "minium_mass":
                result = await LandingsModel.find({mass:{$gte:params.minimum_mass}}, {name:1, mass:1, _id: 0});
                res.send(result);
                break;
        }   
    } else {
        const dateFrom = utils.parseDateJson(params.from);
        const dateTo = utils.parseDateJson(params.to);
        result = await LandingsModel.find({ $and: [ {year: {$gte:dateFrom}}, {year: {$lte:dateTo}} ]});
        res.send(result);
    }
})

router.get("/mass/:id",async(req, res, next)=>{
    const result = await LandingsModel.find({mass:{$eq:req.params.id}}, {name:1, mass:1, _id: 0});
    res.send(result);
})

router.get("/class/:id",async(req, res, next)=>{
    const result = await LandingsModel.find({recclass:{$eq:req.params.id}}, {name:1, recclass:1, _id: 0});
    res.send(result);
})

module.exports = router;