const router = require("express").Router();
const apiParksRouter = require("./api/parks");
const apiRollersRouter = require("./api/rollers");
const apiHousesRouter = require("./api/houses");

router.use("/parks", apiParksRouter);
router.use("/rollers", apiRollersRouter);
router.use("/houses", apiHousesRouter);

module.exports = router;
