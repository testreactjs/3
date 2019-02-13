
import React from 'react'

export const requiredDefault = value => {
  return value ? undefined : (<div className="boss-form__error">
    <p className="boss-form__error-text">
      <span className="boss-form__error-line">This is a required field!</span>
    </p>
  </div>);
}

export const requiredEmail = value => {
  const re = /\S+@\S+\.\S+/;

  return (value && re.test(String(value).toLowerCase()))  ? undefined : (<div className="boss-form__error">
  <p className="boss-form__error-text">
      <span className="boss-form__error-line">This is a required field!</span>
      <span className="boss-form__error-line">It should be a correct email address!</span>
  </p>
</div>);
}

