const { Airplane } = require("../models");
const CrudRepository = require("./crud-repository");

class Airplanerepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}
module.exports = Airplanerepository;
