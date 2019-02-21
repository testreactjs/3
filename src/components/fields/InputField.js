import React, { Component } from 'react';

export default class InputField extends Component {
  onChange = e => {
    const {
      target: { value },
    } = e;
    const {
      input: { onChange },
    } = this.props;
    const valueToChange = value === '' ? null : value;

    onChange(valueToChange);
  };

  render() {
    // console.log('InputField', this.props);
    const { input, meta, label, note, required } = this.props;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          {label && (
            <span className="boss-form__label-text">
              {label} {required ? '*' : ''}
            </span>
          )}
          <input type="text" value={input.value} className="boss-form__input" onChange={this.onChange} />
        </label>
        {note && <p className="boss-form__field-note">{note}</p>}
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

/*
<div>
        <>Input field</>
        <span>{input.value}</span>
        <button onClick={this.handleClick} type="button">Click me</button>
      </div>
*/
