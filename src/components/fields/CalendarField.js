import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class CalendarField extends Component {
  constructor(props) {
    super(props);
    const { input } = this.props;
    this.state = { startDate: input.value ? new Date(input.value) : new Date() };
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    });
    const { input } = this.props;
    const formattedDate = moment(date).format('DD-MM-YYYY');
    input.onChange(formattedDate);
  };

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
              dateFormat="dd-MM-YYYY"
            />
          </div>
        </label>
        {(meta.error || meta.submitError) && meta.touched && (
          <div className="boss-form__error">
            <p className="boss-form__error-text">
              <span className="boss-form__error-line">{meta.error || meta.submitError}</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}
