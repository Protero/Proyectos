const router = require("express").Router();
const LandingsModel = require("../../models/LandingsSchema");
const url = require('url');

router.get("/",async(req, res, next)=>{


    const params = url.parse(req.url,true).query;
    console.log("> params: ", params.minimum_mass);
    const result = await LandingsModel.find({}, { _id: 0, __v: 0 });
    let i;

    

    res.send(result);
})


router.get("/get-landings",async(req, res, next)=>{
    const result = await LandingsModel.find({}, { _id: 0, __v: 0 });
    console.log(">landings: ", result);
    res.send(result);
})

module.exports = router;