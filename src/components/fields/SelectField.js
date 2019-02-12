import React, { Component } from 'react'
import Select from 'react-select';

export default class SelectField extends Component {
  constructor(props) {
    super(props)
    this.state = {options: [
      { value: 'male', label: 'Male' },
      { value: 'femail', label: 'Female' }
    ],}
  }
  onChange = () => {
    console.log("OnChange SelectField", this.props)
  }

  render() {
    const { label } = this.props;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
         <span className="boss-form__label-text">{label}</span>
         <Select className="boss-form__select"
					onChange={this.onChange}
					options={this.state.options}
					simpleValue
            />



         </label>
      </div>
    )
  }
}
