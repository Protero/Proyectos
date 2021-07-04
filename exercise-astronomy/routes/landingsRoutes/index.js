const router = require("express").Router();
const LandingsModel = require("../../models/LandingsSchema");
const url = require('url');

router.get("/",async(req, res, next)=>{
    const params = url.parse(req.url,true).query;
    let result;
    let date;
    let dateJson;
    let dateString;

    if (Object.keys(params).length < 2){
        switch(Object.keys(params)[0]){
            case "to":
                date = new Date(params.to);
                dateJson = date.toJSON();
                dateString = dateJson.substring(0, dateJson.length - 1);
                result = await LandingsModel.find({year:{$eq:dateString}}, {name:1, mass:1, year:1, _id: 0});
                res.send(result);
                break;
                break;
            case "from":
                date = new Date(params.from);
                dateJson = date.toJSON();
                dateString = dateJson.substring(0, dateJson.length - 1);
                result = await LandingsModel.find({year:{$eq:dateString}}, {name:1, mass:1, year:1, _id: 0});
                res.send(result);
                break;
            case "minium_mass":
                result = await LandingsModel.find({mass:{$gte:params.minimum_mass}}, {name:1, mass:1, _id: 0});
                res.send(result);
                break;
        }   
    } else {
        let dateFrom = new Date(params.from);
        let dateFromJson = dateFrom.toJSON();
        let dateFromString = dateFromJson.substring(0, dateFromJson.length - 1);
        let dateTo = new Date(params.to);
        let dateToJson = dateTo.toJSON();
        let dateToString = dateToJson.substring(0, dateToJson.length - 1);
        console.log(dateFromString, dateToString);
        result = await LandingsModel.find({ $and: [ {year: {$gte:dateFromString}}, {year: {$lte:dateToString}} ]});
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