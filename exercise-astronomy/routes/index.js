const router = require("express").Router();

router.use("/landings",require("../routes/landingsRoutes"));

module.exports = router;