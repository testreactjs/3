import React from 'react'
import InputField from '../../../../components/fields/InputField'
import { Form, Field } from 'react-final-form'
import {requiredEmail} from '../../../../utils/validators'

class ContactDetails extends React.Component {
  onSubmit = (values) => {
    console.log("onSubmit ContactDetails", values)
  }



  render() {
    return (
          <Form onSubmit={this.onSubmit} render={({handleSubmit, form, submitting, pristine, values}) =>  (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field name="email" component={InputField} label="Email" validate={requiredEmail} />
                  <Field name="phoneNumber" component={InputField} label="Phone number" />
                  <Field name="address" component={InputField} label="Address" />
                  <Field name="postcode" component={InputField} label="Postcode"/>
                  <Field name="country" component={InputField} label="Country" />
                  <Field name="county" component={InputField} label="County" />
                  <div className="boss-form__field boss-form__field_justify_end">
                    <button type="submit" className="boss-button boss-form__submit boss-form__submit_adjust_single" disabled={submitting} onClick={values => this.onSubmit(values)}>Save</button>
                  </div>

              <pre>{JSON.stringify(values, undefined, 2)}</pre>

               </form> )
            }
            />
    )
  }
}

export default ContactDetails;