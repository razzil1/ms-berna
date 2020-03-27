import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./styles.scss";

class Form extends Component {
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.props.updateValues(name, value);
  };

  handleFormSubmit = event => {
    const { from, to } = this.props;
    if (event.keyCode === 13 && from && to) {
      this.props.submitForm();
    }
  };

  render() {
    const { from, to } = this.props;
    return (
      <form className="form">
        <TextField
          name="from"
          className="form__input"
          id="standard-basic"
          label="From"
          value={from}
          onChange={this.handleChange}
          required
          autoFocus
          onKeyDown={this.handleFormSubmit}
        />
        <TextField
          name="to"
          className="form__input"
          id="standard-basic"
          label="To"
          value={to}
          onChange={this.handleChange}
          required
          onKeyDown={this.handleFormSubmit}
        />
      </form>
    );
  }
}

export default Form;
