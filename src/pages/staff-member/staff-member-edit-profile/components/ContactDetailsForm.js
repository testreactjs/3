import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../../../components/fields/InputField';
import { requiredEmail } from '../../../../utils/validators';

class ContactDetails extends React.Component {
  onSubmit = values => {
    const { onSubmit } = this.props;
    return onSubmit(values).then(response => {
      // console.log(response.status);
      if (response.status === 422) {
        // console.log('PersonalDetailsForm', response.data.errors);
        return response.data.errors;
      }
      return response;
    });
  };

  render() {
    // console.log('this.props', this.props);
    const { initialValues } = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, values }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field name="emailAddress" component={InputField} label="Email" validate={requiredEmail} />
            <Field name="phoneNumber" component={InputField} label="Phone number" />
            <Field name="address" component={InputField} label="Address" />
            <Field name="postcode" component={InputField} label="Postcode" />
            <Field name="country" component={InputField} label="Country" />
            <Field name="county" component={InputField} label="County" />
            <div className="boss-form__field boss-form__field_justify_end">
              <button
                type="submit"
                className="boss-button boss-form__submit boss-form__submit_adjust_single"
                disabled={submitting}
                onClick={() => this.onSubmit(values)}
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

export default ContactDetails;
