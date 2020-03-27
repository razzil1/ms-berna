const winston = require("winston");

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.simple()
  ),
  level: "debug",
  transports: [new winston.transports.Console()]
});

module.exports = logger;
