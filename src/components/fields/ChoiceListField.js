import React, { Component } from 'react'

export default class ChoiceListField extends Component {
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
                <label className="boss-choice-list__radio-label">
                    <input type="radio" name="employement-status" value="1" className="boss-choice-list__radio-button" checked="">
                    <span className="boss-choice-list__radio-label-text">I have supplied my P45 from my previous employer</span>
                </label>
                <label className="boss-choice-list__radio-label">
                    <input type="radio" name="employement-status" value="2" className="boss-choice-list__radio-button">
                    <span className="boss-choice-list__radio-label-text">This is my first job since the 6th of April. I have not been receiving taxable jobseekers allowance, Incapacity benefits or a state/occupational pernsion</span>
                </label>
                <label className="boss-choice-list__radio-label">
                    <input type="radio" name="employement-status" value="3" className="boss-choice-list__radio-button">
                    <span className="boss-choice-list__radio-label-text">This is now my only job. Since the 6th of April I have had another jobs received taxable jobseekers allowance, Incapacity benefit. I don’t receivea state/occupational pension</span>
                </label>
                <label className="boss-choice-list__radio-label">
                    <input type="radio" name="employement-status" value="4" className="boss-choice-list__radio-button">
                    <span className="boss-choice-list__radio-label-text">I have another job or receive a state/occupational pernsion</span>
                </label>
                <label className="boss-choice-list__radio-label">
                    <input type="radio" name="employement-status" value="5" className="boss-choice-list__radio-button">
                    <span className="boss-choice-list__radio-label-text">I left a course of higher education before the 6th of April &amp; receive my first student loan instalmen on or after the 1st of September 1998 &amp; I have not fully repaid my student loan</span>
                </label>
            </div>
        </div>
    </div>

</div>
    )
  }
}
