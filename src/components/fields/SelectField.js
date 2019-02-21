import React, { Component } from 'react';
import Select from 'react-select';

export default class SelectField extends Component {
  handleChange = selectedOption => {
    const { input } = this.props;
    input.onChange(selectedOption);
  };

  render() {
    const { input, label, meta, options, required } = this.props;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          {label && (
            <span className="boss-form__label-text">
              {label} {required ? '*' : ''}
            </span>
          )}
        </label>
        <div className="boss-form__select">
          <Select onChange={this.handleChange} value={input.value} options={options} simpleValue />
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
