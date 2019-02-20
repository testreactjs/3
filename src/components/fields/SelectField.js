import React, { Component } from 'react';
import Select from 'react-select';

export default class SelectField extends Component {
  handleChange = selectedOption => {
    const { input } = this.props;
    input.onChange(selectedOption);
  };

  render() {
    const { input, label, meta, options } = this.props;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{label}</span>
        </label>
        <div className="boss-form__select">
          <Select onChange={this.handleChange} value={input.value} options={options} simpleValue />
        </div>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    );
  }
}
