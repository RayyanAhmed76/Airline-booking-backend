const winston = require("winston");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customformat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level}: ${message}`;
});
const logger = winston.createLogger({
  format: combine(
    label({ label: "info" }),
    timestamp({ format: "YYYY-MM-DD HH-mm-ss" }),
    customformat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
