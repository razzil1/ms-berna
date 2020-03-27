const router = require("express").Router();
const { catchAsyncError } = require("../../services/utils");
const connectionController = require("./connection.controller");

router.get("/", catchAsyncError(connectionController.getConnections));

module.exports = router;
