import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import "./styles.scss";

const StationTable = ({ stations }) => (
  <TableContainer component={Paper}>
    <Table className="table" size="small" aria-label="table">
      <TableBody>
        {stations.map(({ arrivalTime, name }, index) => (
          <TableRow
            key={index}
            className={index % 2 === 0 ? "table__striped" : ""}
          >
            <TableCell className="table__cell">
              {arrivalTime === "Invalid date" ? "??:??" : arrivalTime}
            </TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default StationTable;
