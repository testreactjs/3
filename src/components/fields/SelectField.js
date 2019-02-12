import React, { Component } from 'react'
import Select from 'react-select';

export default class SelectField extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log("OnChange SelectField", this.props)
  }

  render() {
    const { label } = this.props;
    const { selectedOption } = this.state;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
         <span className="boss-form__label-text">{label}</span>
         <Select className="boss-form__select"
					onChange={this.handleChange}
          value={selectedOption}
					options={ [
      { value: 'male', label: 'Male' },
      { value: 'femail', label: 'Female' }
    ]}
					simpleValue
            />



         </label>
      </div>
    )
  }
}
