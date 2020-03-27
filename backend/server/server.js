const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const logger = require("./services/logger");

// Swagger Setup
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("server/swagger.yaml");

// Prometheus Setup
const promBundle = require("express-prom-bundle");
const metricsMiddleware = promBundle({
  includeMethod: true,
  includeStatusCode: true,
  includePath: true
});

process.on("unhandledRejection", (reason, promise) => {
  logger.info(`Unhandled Promise rejection: \n${reason.stack || reason}`);
});

const app = express();
app.set("port", process.env.PORT || 8080);

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(metricsMiddleware);
require("./routes")(app);

const port = app.get("port");
app.listen(port, () => {
  logger.info(`Server is running on ${port}`);
});

module.exports = app;
