import React from 'react'
import InputField from '../../../components/fields/InputField'
import ButtonField from '../../../components/fields/ButtonField'
import { Form, Field } from 'react-final-form'
class ContactDetails extends React.Component {
  onSubmit = () => {
    console.log("onSubmit ContactDetails")
  }
  render() {
    return (
      <section className="boss-content-switcher__chapters">
      <article className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible" data-chapter="employment">
        <header className="boss-content-switcher__header">
          <h2 className="boss-content-switcher__title">ContactDetails</h2>
        </header>
        <div className="boss-content-switcher__content">
        <Form onSubmit={this.onSubmit} render={({ handleSubmit, form, submitting, pristine, values }) =>  (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field component={InputField} label="Email"/>
                  <Field component={InputField} label="Phone number" />
                  <Field component={InputField} label="Address" />
                  <Field component={InputField} label="Postcode" />
                  <Field component={InputField} label="Country" />
                  <Field component={InputField} label="County" />
                  <Field component={ButtonField} label="Save" />

               </form> )
            }
            />
        </div>
      </article>
    </section>
    )
  }
}

export default ContactDetails;