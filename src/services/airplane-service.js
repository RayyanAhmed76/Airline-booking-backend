const { StatusCodes } = require("http-status-codes");
const { Airplanerepository } = require("../repoistries");
const Apperror = require("../utils/errors/app-error");

const airplanerepository = new Airplanerepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanerepository.create(data);
    return airplane;
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      console.log("explanation : ", explanation);
      throw new Apperror(explanation, StatusCodes.BAD_GATEWAY);
    }
    throw new Apperror(
      "cannot create a new airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
};
