import React, { Component } from 'react';

export default class ButtonField extends Component {
  render() {
    const { label } = this.props;
    return (
      <div className="boss-form__field boss-form__field_justify_end">
        <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
          {label}
        </button>
      </div>
    );
  }
}
