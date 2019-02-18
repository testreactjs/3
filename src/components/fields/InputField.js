import React, { Component } from 'react';

export default class InputField extends Component {
  render() {
    // console.log("InputField", this.props)
    const { input, label, note, meta, required } = this.props;

    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          {label && (
            <span className="boss-form__label-text">
              {label} {required ? '*' : ''}
            </span>
          )}
          <input type="text" className="boss-form__input" onChange={event => input.onChange(event.target.value)} />
        </label>
        {note && <p className="boss-form__field-note">{note}</p>}
        {meta.error && meta.touched && <span>{meta.error}</span>}
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
