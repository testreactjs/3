import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from '../../../../components/fields/InputField';
import { requiredEmail } from '../../../../utils/validators';

class ContactDetails extends React.Component {
  onSubmit = values => {
    console.log('onSubmit ContactDetails', values);
  };

  render() {
    console.log('this.props', this.props);
    const {email, phoneNumber, address, postcode, country, county} = this.props.data;
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, values }) => (
          <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
            <Field name="email" component={InputField} label="Email" validate={requiredEmail} data={email} />
            <Field name="phoneNumber" component={InputField} label="Phone number" data={phoneNumber} />
            <Field name="address" component={InputField} label="Address" data={address}  />
            <Field name="postcode" component={InputField} label="Postcode" data={postcode}  />
            <Field name="country" component={InputField} label="Country" data={country}  />
            <Field name="county" component={InputField} label="County" data={county}  />
            <div className="boss-form__field boss-form__field_justify_end">
              <button
                type="submit"
                className="boss-button boss-form__submit boss-form__submit_adjust_single"
                disabled={submitting}
                onClick={value => this.onSubmit(value)}
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
