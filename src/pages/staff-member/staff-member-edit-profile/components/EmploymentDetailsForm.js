import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../../../components/fields/InputField';
import CalendarField from '../../../../components/fields/CalendarField';
import ChoiceListField from '../../../../components/fields/ChoiceListField';
import SelectField from '../../../../components/fields/SelectField';
import { requiredDefault } from '../../../../utils/validators';

class EmploymentDetails extends React.Component {
  onSubmit = values => {
    // console.log(' onSubmit EmploymentDetails ', values);
    const { onChange } = this.props;
    onChange(values);
  };

  render() {
    console.log('this.props EmploymentDetails', this.props);
    const {
      masterVenueId,
      otherVenueIds,
      staffTypeId,
      dateOfBirth,
      payRateId,
      dayPreferenceNote,
      hoursPreferenceNote,
      nationalInsuranceNumber,
      sageId,
      statusStatement,
      staffTypes,
      payRates,
    } = this.props.data;

    // const optionsSelect = [{ value: '1', label: 'Options 1' }, { value: '2', label: 'Options 2' }];
    const optionsSelectStaffTypes = staffTypes.map(value => {
      return { value: value.id, label: value.name };
    });
    const optionSelectPayRates = payRates.map(value => {
      return { value: value.id, label: value.name };
    });
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field
              name="mainVenue"
              component={InputField}
              label="Main Venue"
              validate={requiredDefault}
              data={masterVenueId}
            />
            <Field name="otherVenues" component={InputField} label="Other Venues" data={otherVenueIds} />
            <Field
              name="staffType"
              component={SelectField}
              options={optionsSelectStaffTypes}
              label="Staff Type*"
              required
              data={staffTypeId}
            />
            <Field name="dateOfBirth" component={CalendarField} label="Date of birth*" data={dateOfBirth} />
            <Field
              name="payRate"
              options={optionSelectPayRates}
              component={SelectField}
              label="Pay rate"
              data={payRateId}
              required
            />
            <Field
              name="dayPreference"
              component={InputField}
              data={dayPreferenceNote}
              label="Day Preference"
              note="Preferred days to work displayed to the rota (e.g mornings and weekends)"
            />
            <Field
              name="hoursPreference"
              component={InputField}
              data={hoursPreferenceNote}
              label="Hours Preference"
              note="Preferred number of hours to work per week displayed in the rota (e.g 40,20+)"
            />
            <Field
              name="nationalInsuranceNumber"
              component={InputField}
              label="National Insurance Number"
              data={nationalInsuranceNumber}
            />
            <Field name="sageId" component={InputField} label="Sage ID" data={sageId} />

            <Field
              name="employmentStatus"
              component={ChoiceListField}
              title="Starter Employement Status Statement"
              data={statusStatement}
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
