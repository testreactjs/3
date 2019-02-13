import React from 'react'
import InputField from '../../../components/fields/InputField'
import { Form, Field } from 'react-final-form'


class ContactDetails extends React.Component {
  onSubmit = (values) => {
    console.log("onSubmit ContactDetails", values)
  }

  requiredEmail = value => {
    return value ? undefined : (<div className="boss-form__error">
    <p className="boss-form__error-text">
        <span className="boss-form__error-line">This is a required field!</span>
        <span className="boss-form__error-line">It should be a correct email address!</span>
    </p>
  </div>);
  }

  render() {
    return (
          <Form onSubmit={this.onSubmit} render={({handleSubmit, form, submitting, pristine, values}) =>  (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field name="email" component={InputField} label="Email" validate={this.requiredEmail} />
                  <Field name="phoneNumber" component={InputField} label="Phone number" />
                  <Field name="address" component={InputField} label="Address" />
                  <Field name="postcode" component={InputField} label="Postcode" />
                  <Field name="country" component={InputField} label="Country" />
                  <Field name="county" component={InputField} label="County" />
                  <div className="boss-form__field boss-form__field_justify_end">
                    <button type="submit" className="boss-button boss-form__submit boss-form__submit_adjust_single"  disabled={submitting} onClick={values => this.onSubmit(values)}>Save</button>
                  </div>

              <pre>{JSON.stringify(values, undefined, 2)}</pre>

               </form> )
            }
            />
    )
  }
}

export default ContactDetails;