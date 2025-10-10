const express = require("express");
const { InfoControllers } = require("../../controllers/index");

const router = express.Router();

router.get("/info", InfoControllers.info);

module.exports = router;
