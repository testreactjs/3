import React from 'react'
import { Form, Field } from 'react-final-form'
import InputField from '../../../../components/fields/InputField'
import CalendarField from '../../../../components/fields/CalendarField'
import ChoiceListField from '../../../../components/fields/ChoiceListField'
import SelectField from '../../../../components/fields/SelectField'
import {requiredDefault} from '../../../../utils/validators'

class EmploymentDetails extends React.Component {
  onSubmit = (values) => {
    console.log(" onSubmit EmploymentDetails ", values)
  }
  render() {
    const optionsSelect = [
      { value: '1', label: 'Options 1' },
      { value: '2', label: 'Options 2' }
    ];
    return (
      <Form onSubmit={this.onSubmit} render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
          <Field name="mainVenue" component={InputField} label="Main Venue" validate={requiredDefault}/>
          <Field name="otherVenues" component={InputField} label="Other Venues" />
          <Field name="staffType" component={SelectField} options={optionsSelect} label="Staff Type*"  required />
          <Field name="dateOfBirth" component={CalendarField} label="Date of birth*" />
          <Field name="payRate" component={InputField} label="Pay rate"  required/>
          <Field name="dayPreference" component={InputField} label="Day Preference" note='Preferred days to work displayed to the rota (e.g mornings and weekends)' />
          <Field name="hoursPreference" component={InputField} label="Hours Preference" note='Preferred number of hours to work per week displayed in the rota (e.g 40,20+)' />
          <Field name="nationalInsuranceNumber" component={InputField} label="National Insurance Number" />
          <Field name="sageId" component={InputField} label="Sage ID" />

          <Field name="employmentStatus" component={ChoiceListField} title="Starter Employement Status Statement" note="Tick one that applies" />
          <div className="boss-form__field boss-form__field_justify_end">
            <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">Save</button>
          </div>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>)
      }
      />
    )
  }
}

export default EmploymentDetails;