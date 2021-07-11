const router = require("express").Router();

router.use("/landings",require("../routes/landingsRoutes"));
router.use("/neas",require("../routes/neasRoutes"));
router.use("/guild",require("../routes/usersRoutes"));

module.exports = router;