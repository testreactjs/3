import React, { Component } from 'react';

export default class InputField extends Component {
  render() {
    console.log('InputField', this.props);
    const { input, label, note, required, data, onChange } = this.props;

    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
          {label && (
            <span className="boss-form__label-text">
              {label} {required ? '*' : ''}
            </span>
          )}
          <input
            type="text"
            className="boss-form__input"
            onChange={event => onChange(event.target.value)}
            defaultValue={data}
          />
        </label>
        {note && <p className="boss-form__field-note">{note}</p>}
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
