const express = require("express");

const router = express.Router();
const { Airplanemiddlewares } = require("../../middlewares/index");

const { Airplanecontroller } = require("../../controllers/index");

/*/api/v1/airplanes/post*/
router.post(
  "/",
  Airplanemiddlewares.validateCreateAirplane,
  Airplanecontroller.CreateAirplane
);

/*/api/v1/airplanes/get*/
router.get("/", Airplanecontroller.getAirplanes);

/*/api/v1/airplanes/:id get*/
router.get("/:id", Airplanecontroller.getAirplane);

router.delete("/:id", Airplanecontroller.deleteAirplane);
module.exports = router;
