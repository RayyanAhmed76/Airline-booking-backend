const express = require("express");

const router = express.Router();
const { Airplanemiddlewares } = require("../../middlewares/index");

const { Airplanecontroller } = require("../../controllers/index");

router.post(
  "/",
  Airplanemiddlewares.validateCreateAirplane,
  Airplanecontroller.CreateAirplane
);

module.exports = router;
