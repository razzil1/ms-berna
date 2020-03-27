import moment from "moment";

const calculateSectionDuration = (departureTime, arrivalTime) => {
  const departure = moment(departureTime);
  const arrival = moment(arrivalTime);
  const minutes = arrival.diff(departure, "minutes");
  if (minutes < 60) {
    return `${minutes}m`;
  }
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};

const calculateConnectionTime = time => {
  const hours = parseInt(time.slice(3, 5));
  const minutes = parseInt(time.slice(6, 8));

  return `${hours}h ${minutes}m`;
};

const formatTime = time => {
  return moment(time).format("HH:mm");
};

export { calculateSectionDuration, calculateConnectionTime, formatTime };
