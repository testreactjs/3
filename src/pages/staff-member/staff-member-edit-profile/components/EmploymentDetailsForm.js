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
    // console.log(' onSubmit EmploymentDetails ', values);
    const { onChange } = this.props;
    onChange(values);
  };

  render() {
    console.log('this.props EmploymentDetails', this.props);
    const { initialValues, staffTypesOptions, payRatesOptions, venuesOptions } = this.props;

    // const optionsSelect = [{ value: '1', label: 'Options 1' }, { value: '2', label: 'Options 2' }];
    const optionsSelectStaffTypes = staffTypesOptions.map(value => {
      return { value: value.id, label: value.name };
    });
    const optionSelectPayRates = payRatesOptions.map(value => {
      return { value: value.id, label: value.name };
    });
    const optionSelectVenues = venuesOptions.map(value => {
      return { value: value.id, label: value.name };
    });
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field name="masterVenueId" component={InputField} label="Main Venue" validate={requiredDefault} />
            <Field
              name="otherVenueIds"
              component={MultiSelectField}
              options={optionSelectVenues}
              label="Other Venues"
            />
            <Field
              name="staffTypeId"
              component={SelectField}
              options={optionsSelectStaffTypes}
              label="Staff Type*"
              required
            />
            <Field name="dateOfBirth" component={CalendarField} label="Date of birth*" />
            <Field name="payRateId" options={optionSelectPayRates} component={SelectField} label="Pay rate" required />
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
              name="statusStatement"
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
