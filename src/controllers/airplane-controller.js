const { Airplaneservice } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
async function CreateAirplane(req, res) {
  try {
    const airplane = await Airplaneservice.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfull created",
      data: airplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "something went wrong!",
      data: {},
      error: error,
    });
  }
}

module.exports = { CreateAirplane };
