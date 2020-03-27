const connectionService = require("./connection.service");
const constants = require("../../services/constants");

exports.getConnections = async (req, res) => {
  const { from, to, arrivalTime = constants.arrivalTime } = req.query;
  const limit = parseInt(req.query.limit, 10) || constants.connectionsLimit;

  if (!from || !to) {
    return res
      .status(400)
      .json({ message: "You need to provide from and to parameters" });
  }

  const result = await connectionService.getConnections({
    from,
    to,
    arrivalTime,
    limit
  });
  return res.json(result);
};
