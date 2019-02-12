import React, { Component } from 'react'
import { Field } from 'react-final-form'
export default class ChoiceListField extends Component {
  onSubmit = () => {
    console.log("ChoiceListField onSubmit")
  }

  handleSubmit = () => {
    console.log("ChoiceListField handleSubmit")
  }
  render() {
    return (
    <div className="boss-form__field">
      <div className="boss-choice-list">
        <div className="boss-choice-list__header">
            <h3 className="boss-choice-list__title">Starter Employement Status Statement</h3>
        </div>
        <div className="boss-choice-list__content">
            <p className="boss-choice-list__text">Tick one that applies</p>
            <div className="boss-choice-list__controls">
                <div className="boss-form boss-form_page_profile-edit">
                <label className="boss-choice-list__radio-label">
                  <Field name="employement-status" component="input" value="1" type="radio" className="boss-choice-list__radio-button" />
                  <span className="boss-choice-list__radio-label-text">I have supplied my P45 from my previous employer</span>
                </label>
                <label className="boss-choice-list__radio-label">
                  <Field name="employement-status" component="input" value="2" type="radio" className="boss-choice-list__radio-button" />
                  <span className="boss-choice-list__radio-label-text">This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion</span>
                </label>
                <label className="boss-choice-list__radio-label">
                  <Field name="employement-status" component="input" value="3" type="radio" className="boss-choice-list__radio-button" />
                  <span className="boss-choice-list__radio-label-text">This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension</span>
                </label>
                <label className="boss-choice-list__radio-label">
                  <Field name="employement-status" component="input" value="4" type="radio" className="boss-choice-list__radio-button" />
                  <span className="boss-choice-list__radio-label-text">I have another job or receive a state/occupational pernsion</span>
                </label>
                <label className="boss-choice-list__radio-label">
                  <Field name="employement-status" component="input" value="5" type="radio" className="boss-choice-list__radio-button" />
                  <span className="boss-choice-list__radio-label-text">I left a course of higher education before the 6th of April & receive my first student loan instalmen on or after the 1st of September 1998 & I have not fully repaid my student loan</span>
                </label>
               </div>
            </div>
        </div>
    </div>

</div>
    )
  }
}
