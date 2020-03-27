import React, { Component } from "react";
import {
  calculateSectionDuration,
  calculateConnectionTime,
  formatTime
} from "../../utils/helpers";
import Section from "../Section";
import "./styles.scss";

class Connection extends Component {
  state = {
    sections: []
  };

  componentDidMount() {
    if (this.props.connection) {
      const sections = this.getSections(this.props.connection.sections);
      this.setState({ sections });
    }
  }

  getSections = sections => {
    return sections.map(({ journey, walk, departure, arrival }) => {
      const result = {
        arrivalName: arrival.station.name,
        duration: calculateSectionDuration(departure.departure, arrival.arrival)
      };

      if (journey) {
        result.category = journey.category;
        result.transportation = journey.name;
        result.numberOfStations = journey.passList.length;
        if (journey.category === "IC") {
          result.stations = journey.passList.map(p => ({
            name: p.station.name,
            arrivalTime: formatTime(p.arrival)
          }));
        }
      } else {
        result.category = "W";
      }

      return result;
    });
  };

  render() {
    const { duration, transfers } = this.props.connection;
    const { sections } = this.state;

    return (
      <>
        <div className="details">
          <span>Duration: {calculateConnectionTime(duration)}</span>
          <span className="details__transfers">Transfers: {transfers}</span>
        </div>
        {sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </>
    );
  }
}

export default Connection;
