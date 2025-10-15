const { StatusCodes } = require("http-status-codes");
const Logger = require("../config/logger-config");
const Apperror = require("../utils/errors/app-error");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (!response) {
      throw new Apperror("airplane does not exist", StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new Apperror(
        "Could not able to find the plane",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }

  async getall(data) {
    const response = await this.model.findAll(data);
    return response;
  }

  async update(data, id) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;
