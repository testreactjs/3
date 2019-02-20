import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../../../components/fields/InputField';
import SelectField from '../../../../components/fields/SelectField';
import CalendarField from '../../../../components/fields/CalendarField';
// import { genderOptions } from '../../../../components/fields/form-options';

class PersonalDetailsForm extends React.Component {
  onSubmit = async values => {
    const { onSubmit } = this.props;
    const test = await onSubmit(values).then(response => {
      if (response.status === 422) {
        // console.log('PersonalDetailsForm', response.data.errors);
        return response.data.errors;
      }
      return response;
    });
    console.log(test);
    return test;
  };

  render() {
    console.log('PersonalDetailsForm this.props.data', this.props);
    const { firstName, surname, gender, genderValues } = this.props.data;

    const genderOptions = genderValues.map(value => {
      return { value, label: value };
    });

    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, values, submitting }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field name="firstName">
              {/* component={InputField} label="First Name" data={firstName} required> */}
              {({ input, meta }) => (
                <section>
                  <InputField {...input} label="First Name" data={firstName} required />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <div className="boss-form__error">
                      <p className="boss-form__error-text">
                        <span className="boss-form__error-line">{meta.error || meta.submitError}</span>
                      </p>
                    </div>
                  )}
                </section>
              )}
            </Field>

            <Field name="surname" component={InputField} label="Surname" data={surname} required />
            <Field name="gender" component={SelectField} options={genderOptions} data={gender} label="Gender" />
            <Field name="dateOfBirth" component={CalendarField} label="Date of birth" />
            <div className="boss-form__field boss-form__field_justify_end">
              <button
                className="boss-button boss-form__submit boss-form__submit_adjust_single"
                type="submit"
                disabled={submitting}
              >
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

export default PersonalDetailsForm;
