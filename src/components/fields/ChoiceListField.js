import React, { Component } from 'react'

import { employmentStatusOptions } from './form-options';

class ChoiceListField extends Component {


  handleChange = (e) => {
    const {input} = this.props;
    const {target: {value}} = e;
    input.onChange(value);
  }

  renderList = () => {
    return Object.entries(employmentStatusOptions).map((entry, index) => {
      const [key, value] = entry;
      const {input} = this.props;
      const isChecked = key === input.value;
      return (
      <label className="boss-choice-list__radio-label">
        <input key={key} value={key} checked={isChecked} type="radio" className="boss-choice-list__radio-button" onChange={this.handleChange} />
        <span className="boss-choice-list__radio-label-text">{value}</span>
      </label>
    )});
  }

  render() {
    const { title } = this.props;
    return (
      <div className="boss-form__field">
        <div className="boss-choice-list">
          <div className="boss-choice-list__header">
            <h3 className="boss-choice-list__title">{title}</h3>
          </div>
          <div className="boss-choice-list__content">
            <p className="boss-choice-list__text">Tick one that applies</p>
            <div className="boss-choice-list__controls">
              <div className="boss-form boss-form_page_profile-edit">
              {this.renderList()}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ChoiceListField;