import React, { Component } from 'react';
import Select from 'react-select';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

export default class MultiSelectField extends Component {
  handleChange = selectedOption => {
    console.log('OnChange MultiSelectField', selectedOption);
    const { input } = this.props;
    input.onChange(selectedOption);
  };

  render() {
    const { label, meta /* options, data */ } = this.props;
    // const { selectedOption } = this.state;
    /*
    const defaultValue = data.map(value => {
      return options[value];
    });
    */
    // console.log('defaultValue, options', defaultValue, options);
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          <span className="boss-form__label-text">{label}</span>
        </label>
        <div className="boss-form__select">
          <Select
            onChange={this.handleChange}
            defaultValue={[colourOptions[2], colourOptions[3]]}
            options={colourOptions}
            multi={true}
          />
        </div>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    );
  }
}
