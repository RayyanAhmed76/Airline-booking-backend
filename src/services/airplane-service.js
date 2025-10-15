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

async function getAirplane(id) {
  try {
    const airplanes = await airplanerepository.get(id);
    return airplanes;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new Apperror(
        "The airplane you tried to request is not present!",
        error.statusCode
      );
    }
    throw new Apperror(
      "cannot find the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplanerepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new Apperror(
        "The airplane you tried to delete is not present!",
        error.statusCode
      );
    }
    throw new Apperror(
      "cannot find the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  destroyAirplane,
};
