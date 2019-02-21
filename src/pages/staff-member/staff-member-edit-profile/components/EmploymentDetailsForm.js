import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../../../components/fields/InputField';
import CalendarField from '../../../../components/fields/CalendarField';
import ChoiceListField from '../../../../components/fields/ChoiceListField';
import SelectField from '../../../../components/fields/SelectField';
import MultiSelectField from '../../../../components/fields/MultiSelectField';
import { requiredDefault } from '../../../../utils/validators';

class EmploymentDetails extends React.Component {
  onSubmit = values => {
    const { onSubmit } = this.props;
    return onSubmit({ values }).then(response => {
      // console.log(response.status);
      if (response.status === 422) {
        // console.log('PersonalDetailsForm', response.data.errors);
        return response.data.errors;
      }
      return response;
    });
  };

  render() {
    // console.log('this.props EmploymentDetails', this.props);
    const { initialValues, staffTypesOptions, payRatesOptions, venuesOptions } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field
              name="masterVenue"
              component={SelectField}
              options={venuesOptions}
              label="Main Venue"
              validate={requiredDefault}
            />
            <Field name="otherVenues" component={MultiSelectField} options={venuesOptions} label="Other Venues" />
            <Field name="staffType" component={SelectField} options={staffTypesOptions} label="Staff Type" required />
            <Field name="startsAt" component={CalendarField} label="Starts at" required />
            <Field name="payRateId" options={payRatesOptions} component={SelectField} label="Pay rate" required />
            <Field
              name="dayPreferenceNote"
              component={InputField}
              label="Day Preference"
              note="Preferred days to work displayed to the rota (e.g mornings and weekends)"
            />
            <Field
              name="hoursPreferenceNote"
              component={InputField}
              label="Hours Preference"
              note="Preferred number of hours to work per week displayed in the rota (e.g 40,20+)"
            />
            <Field name="nationalInsuranceNumber" component={InputField} label="National Insurance Number" />
            <Field name="sageId" component={InputField} label="Sage ID" />

            <Field
              name="employmentStatus"
              component={ChoiceListField}
              title="Starter Employement Status Statement"
              note="Tick one that applies"
            />
            <div className="boss-form__field boss-form__field_justify_end">
              <button className="boss-button boss-form__submit boss-form__submit_adjust_single" type="submit">
                Save
              </button>
            </div>
            <pre>{JSON.stringify(values, undefined, 2)}</pre>
          </form>
        )}
      />
    );
  }
}

export default EmploymentDetails;
