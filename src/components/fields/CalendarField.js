import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CalendarField extends Component {
  constructor(props) {
    super(props);
    this.state = { startDate: new Date() }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
    const { input } = this.props;
    input.onChange(date);
  }

  render() {
    const { label, meta } = this.props;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{label}</span>
          <div className="date-picker-input">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              withPortal
            />
          </div>
        </label>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )
  }
}
