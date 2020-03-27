import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import Form from "../../components/Form";
import Connection from "../../components/Connection";
import Logo from "../../components/Logo";
import "./styles.scss";

class Home extends Component {
  state = {
    from: "",
    to: "",
    connections: null,
    loading: false,
    open: false
  };

  updateValues = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitForm = () => {
    this.setState({ loading: true, connections: null });
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/connections", {
        params: {
          from: this.state.from,
          to: this.state.to
        }
      })
      .then(response => {
        this.setState({
          connections: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          loading: false,
          open: true
        });
      });
  };

  render() {
    const { from, loading, connections, to, open } = this.state;
    return (
      <div className="centered">
        <Form
          from={from}
          to={to}
          updateValues={this.updateValues}
          submitForm={this.submitForm}
        />
        {loading && (
          <div className="center-text">
            <CircularProgress />
          </div>
        )}
        {connections && connections[0] && (
          <Connection connection={connections[0]} />
        )}
        <Logo />
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={5000}
          open={open}
          onClose={this.handleClose}
        >
          <Alert severity="warning">Oops! Something went wrong.</Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Home;
