const express = require("express");

const router = express.Router();

const { Airplanecontroller } = require("../../controllers/index");

router.post("/", Airplanecontroller.CreateAirplane);

module.exports = router;
