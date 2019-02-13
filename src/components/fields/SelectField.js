import React, { Component } from 'react'
import Select from 'react-select';

export default class SelectField extends Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log("OnChange SelectField", this.props)
    const { input } = this.props;
    input.onChange(selectedOption)
  }


  render() {
    const { label, meta, options } = this.props;
    const { selectedOption } = this.state;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
         <span className="boss-form__label-text">{label}</span>
         <Select className="boss-form__select"
					onChange={this.handleChange}
          value={selectedOption}
					options={options}
					simpleValue
            />
         </label>
         {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )
  }
}
