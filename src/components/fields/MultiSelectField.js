import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class MultiSelectField extends Component {
  handleChange = selectedOptions => {
    const { input } = this.props;
    if (!selectedOptions) {
      return input.onChange([]);
    }
    const arrayValues = selectedOptions.split(',');
    return input.onChange(arrayValues);
  };

  render() {
    const { label, meta, input, options } = this.props;
    // console.log(input.value);
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{label}</span>
        </label>
        <div className="boss-form__select">
          <Select onChange={this.handleChange} value={input.value} options={options} simpleValue multi />
        </div>
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
