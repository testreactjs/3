import React from 'react'
import InputField from '../../../components/fields/InputField'
import { Form, Field } from 'react-final-form'
class ContactDetails extends React.Component {
  onSubmit = () => {
    console.log("onSubmit ContactDetails")
  }

  render() {
    return (
          <Form onSubmit={this.onSubmit} render={({ handleSubmit, submitting }) =>  (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field name="email" component={InputField} label="Email" required="true"/>
                  <Field name="phoneNumber" component={InputField} label="Phone number" />
                  <Field name="address" component={InputField} label="Address" />
                  <Field name="postcode" component={InputField} label="Postcode" />
                  <Field name="country" component={InputField} label="Country" />
                  <Field name="county" component={InputField} label="County" />
                  <div className="boss-form__field boss-form__field_justify_end">
                    <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
                  </div>
               </form> )
            }
            />
    )
  }
}

export default ContactDetails;