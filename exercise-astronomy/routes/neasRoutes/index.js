const router = require("express").Router();
const NeasModel = require("../../models/NeasSchema");
const url = require("url");
const utils = require("../../script/index.js");

router.get("/",async(req, res, next)=>{
    const params = url.parse(req.url,true).query;
    let result;
    let date;

    if (Object.keys(params).length < 2){
        switch(Object.keys(params)[0]){
            case "to":
                result = await NeasModel.find({}, {designation:1, period_yr: 1, discovery_date:1, _id: 0});
                date = utils.parseDateNeasJson(params.to,result);
                res.send(date);
                break;
            case "from":
                result = await NeasModel.find({}, {designation:1, period_yr: 1, discovery_date:1, _id: 0});
                date = utils.parseDateNeasJson(params.from,result);
                res.send(date);
                break;
            case "class":
                result = await NeasModel.find({orbit_class:{$eq:params.class}}, {designation:1,period_yr:1, discovery_date:1,_id: 0,});
                res.send(result);
                break;
            case "pha":
                const dangerous = 'Y';
                const noDangerous = 'N';
                if (params.pha === 'Y' || params.pha === '1' ){
                    result = await NeasModel.find({$and: [{pha:{$eq:dangerous}},{moid_au:{$lte:0.05}},{h_mag:{$lte:22.0}}]}, {designation:1, period_yr:1, discovery_date:1, pha: 1,_id: 0,});
                    res.send(result);
                }
                else if (params.pha === 'N' || params.pha === '0' ){
                    result = await NeasModel.find({$and: [{pha:{$eq:noDangerous}},{moid_au:{$gte:0.05}},{h_mag:{$gte:22.0}}]}, {designation:1, period_yr:1, discovery_date:1, pha: 1,_id: 0,});
                    res.send(result);
                }
                else  res.send("No hay resultados que se ajusten a la búsqueda")
                
                break;
            default:
                res.send("No hay resultados que se ajusten a la búsqueda")
                break;
            // case "moid_au":
            //     break;
        }   
    } else {

        const dateFrom = params.from;
        const dateTo = params.to;
        result = await NeasModel.find({}, {designation:1, period_yr: 1, discovery_date:1, _id: 0});
        date = utils.parseStringDate(dateFrom,dateTo,result);
        res.send(date);
    }
})

router.get("/periods",async(req, res, next)=>{
    const params = url.parse(req.url,true).query;
    let result;

    if (Object.keys(params).length < 2){
        switch(Object.keys(params)[0]){
            case "to":
                result = await NeasModel.find({period_yr:{$eq:params.to}}, {designation:1, period_yr: 1, discovery_date:1, _id: 0});
                res.send(result);
                break;
            case "from":
                result = await NeasModel.find({period_yr:{$eq:params.from}}, {designation:1, period_yr: 1, discovery_date:1, _id: 0});
                res.send(result);
                break;
        }   
    } else {
        result = await NeasModel.find({ period_yr: { $gte: params.from,  $lte: params.to} }, {designation:1, period_yr: 1, discovery_date:1, _id: 0});
        res.send(result);
    }
});
module.exports = router;