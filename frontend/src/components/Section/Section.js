import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import TramIcon from "@material-ui/icons/Tram";
import TrainIcon from "@material-ui/icons/Train";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@material-ui/icons/Help";
import {
  CardHeader,
  IconButton,
  Collapse,
  CardContent
} from "@material-ui/core";
import StationTable from "../StationTable";
import "./styles.scss";

class Section extends Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  getIcon = type => {
    switch (type) {
      case "W":
        return <DirectionsWalkIcon />;
      case "T":
        return <TramIcon />;
      case "IC":
        return <TrainIcon />;
      case "NFB":
      case "B":
        return <DirectionsBusIcon />;
      default:
        return <HelpIcon />;
    }
  };

  getTitle = (category, transportation, arrivalName) => {
    if (category === "W") {
      return <span>Walk to {arrivalName}</span>;
    }
    return (
      <span>
        Take <span className="section__transportation">{transportation}</span>{" "}
        to {arrivalName}
      </span>
    );
  };

  render() {
    const {
      category,
      transportation,
      arrivalName,
      duration,
      numberOfStations,
      stations
    } = this.props.section;

    const { expanded } = this.state;

    return (
      <div className="section">
        <Card>
          <CardHeader
            avatar={this.getIcon(category)}
            action={
              <div className="section__action">
                {category === "IC" && (
                  <IconButton
                    className={
                      expanded ? "section__expended" : "section__expend"
                    }
                    onClick={this.handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                )}
              </div>
            }
            title={this.getTitle(category, transportation, arrivalName)}
            subheader={
              <div>
                <span>{duration}</span>
                {category !== "W" && (
                  <span className="section__stations">
                    {numberOfStations} stations
                  </span>
                )}
              </div>
            }
          />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <StationTable stations={stations} />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default Section;
