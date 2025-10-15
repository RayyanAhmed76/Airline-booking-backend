const { StatusCodes } = require("http-status-codes");
const { Airplanerepository } = require("../repoistries");
const Apperror = require("../utils/errors/app-error");

const airplanerepository = new Airplanerepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanerepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new Apperror(explanation, StatusCodes.BAD_GATEWAY);
    }
    throw new Apperror(
      "cannot create a new airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllAirplanes() {
  try {
    const airplanes = await airplanerepository.getall();
    return airplanes;
  } catch (error) {
    throw new Apperror(
      "cannot fetch data of all airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes,
};
