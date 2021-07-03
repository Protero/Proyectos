const router = require("express").Router();
const LandingsModel = require("../../models/LandingsSchema");


router.get("/get-landings",async(req, res, next)=>{
    const result = await LandingsModel.find({}, { _id: 0, __v: 0 });
    console.log(">landings: ", result);
    res.send(result);
})

module.exports = router;