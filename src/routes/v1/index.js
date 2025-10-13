const express = require("express");
const { InfoControllers } = require("../../controllers/index");

const router = express.Router();
const airplaneRoute = require("./airplanes-route");

router.use("/airplane", airplaneRoute);
router.get("/info", InfoControllers.info);

module.exports = router;
