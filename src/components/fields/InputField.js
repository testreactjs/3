import React, { Component } from 'react'

export default class InputField extends Component {
  handleClick = () => {
    const {input} = this.props;
    input.onChange('FOO');
  }
  render() {
    console.log(this.props)
    const { input, label } = this.props;
    return (
      <div className="boss-form__field">
        <label className="boss-form__label">
         <span className="boss-form__label-text">{label}</span>
         <input type="text" className="boss-form__input"/>
         </label>
      </div>
    )
  }
}

/*
<div>
        <>Input field</>
        <span>{input.value}</span>
        <button onClick={this.handleClick} type="button">Click me</button>
      </div>
*/