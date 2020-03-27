const logger = require("./logger");

const catchAsyncError = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(error => {
    logger.error(`Async error catched: ${error}`);
    res.sendStatus(500);
  });
};

module.exports = {
  catchAsyncError
};
