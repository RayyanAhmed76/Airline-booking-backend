const Logger = require("../config/logger-config");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Logger is:", Logger);

      Logger.error("something went wrong in crud repo: create");
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("something went wrong in crud repo: create");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findbyPk(data);
      return response;
    } catch (error) {
      Logger.error("something went wrong in crud repo: create");
      throw error;
    }
  }

  async getall(data) {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      Logger.error("something went wrong in crud repo: create");
      throw error;
    }
  }

  async update(data, id) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("something went wrong in crud repo: create");
      throw error;
    }
  }
}

module.exports = CrudRepository;
