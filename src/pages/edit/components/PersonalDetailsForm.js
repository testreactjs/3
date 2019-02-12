import React from 'react'
import { Form, Field } from 'react-final-form'
import InputField from '../../../components/fields/InputField'
import SelectField from '../../../components/fields/SelectField'
import CalendarField from '../../../components/fields/CalendarField'



class PersonalDetails extends React.Component {
  onSubmit = () => {
    console.log("onSubmit.PersonalDetails");
  }
  render() {
    return (

            <Form onSubmit={this.onSubmit} render={({ handleSubmit, form, submitting, pristine, values }) =>  (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field name="firstName" component={InputField} label="First Name*" />
                  <Field name="surname" component={InputField} label="Surname*" />
                  <Field name="gender" component={SelectField} label="Gender*" />
                  <Field name="dateOfBirth" component={CalendarField} label="Date of birth*" />
                  <div className="boss-form__field boss-form__field_justify_end">
                    <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
                  </div>
               </form>
              )
            }
            />

    )
  }
}

export default PersonalDetails;

//<pre>{JSON.stringify(values, null, 2)}</pre>