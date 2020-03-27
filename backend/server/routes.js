const connectionRoutes = require("./api/connection/connection.routes");

module.exports = app => {
  app.use("/connections", connectionRoutes);
};
