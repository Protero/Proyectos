const router = require("express").Router();
const NeasModel = require("../../models/NeasSchema");



router.get("/get-neas",async(req, res, next)=>{
    const result = await NeasModel.find({}, { _id: 0, __v: 0 });
    console.log(">neas: ", result);
    res.send(result);
})

module.exports = router;