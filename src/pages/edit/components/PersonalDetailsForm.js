import React from 'react'
import { Form, Field } from 'react-final-form'
import InputField from '../../../components/fields/InputField'
import SelectField from '../../../components/fields/SelectField'
import CalendarField from '../../../components/fields/CalendarField'



class PersonalDetails extends React.Component {
  onSubmit = (values) => {
    console.log("onSubmit.PersonalDetails", values);
  }

  required = value => {
    return value ? undefined : (<div className="boss-form__error">
    <p className="boss-form__error-text">
        <span className="boss-form__error-line">This is a required field!</span>
    </p>
  </div>);
  }

  render() {
    const options = [
      { value: 'male', label: 'Male' },
      { value: 'femail', label: 'Female'}
    ];
    return (

            <Form onSubmit={this.onSubmit} render={({ handleSubmit, form, submitting, pristine, values }) =>  (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field name="firstName" component={InputField} label="First Name*" required/>
                  <Field name="surname" component={InputField} label="Surname*" required/>
                  <Field name="gender" component={SelectField} options={options} label="Gender*" validate={this.required} />
                  <Field name="dateOfBirth" component={CalendarField} label="Date of birth*" validate={this.required} />
                  <div className="boss-form__field boss-form__field_justify_end">
                    <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
                  </div>
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
               </form>
              )
            }
            />

    )
  }
}

export default PersonalDetails;

//<pre>{JSON.stringify(values, null, 2)}</pre>