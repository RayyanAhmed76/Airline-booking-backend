const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common/index");
const Apperror = require("../utils/errors/app-error");
function validateCreateAirplane(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating airplane!";
    ErrorResponse.error = new Apperror(
      ["modelNumber not found in incoming request!"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateAirplane,
};
