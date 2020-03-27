const axios = require("axios");
const constants = require("../../services/constants");

exports.getConnections = async ({ from, to, arrivalTime, limit }) => {
  const { data } = await axios.get(process.env.TRANSPORT_URL + "/connections", {
    params: {
      from,
      to,
      limit,
      time: arrivalTime,
      isArrivalTime: constants.isArrivalTime,
      direct: constants.direct
    }
  });

  const result = data.connections.map(({ duration, transfers, sections }) => ({
    duration,
    transfers,
    sections
  }));

  return result;
};
