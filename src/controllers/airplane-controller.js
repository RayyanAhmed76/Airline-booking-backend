const { Airplaneservice } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, successResponse } = require("../utils/common/index");
async function CreateAirplane(req, res) {
  try {
    const airplane = await Airplaneservice.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    successResponse.data = airplane;
    successResponse.message = "successfully created!";
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    ErrorResponse.detailerror = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = { CreateAirplane };
