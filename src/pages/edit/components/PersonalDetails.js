import React from 'react'
import { Form, Field } from 'react-final-form'
import InputField from '../../../components/fields/InputField'
import SelectField from '../../../components/fields/SelectField'
import CalendarField from '../../../components/fields/CalendarField'
import ButtonField from '../../../components/fields/ButtonField'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class PersonalDetails extends React.Component {
  render() {
    return (
      <section className="boss-content-switcher__chapters">
        <article className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible" data-chapter="employment">
          <header className="boss-content-switcher__header">
            <h2 className="boss-content-switcher__title">PersonalDetails</h2>
          </header>
          <div className="boss-content-switcher__content">

            <Form onSubmit={onSubmit} render={({ handleSubmit, form, submitting, pristine, values }) => {
              return (
                <form onSubmit={handleSubmit} className="boss-form boss-form_page_profile-edit">
                  <Field component={InputField} label="First Name*" />
                  <Field component={InputField} label="Surname*" />
                  <Field component={SelectField} label="Gender*" />
                  <Field component={CalendarField} label="Date of birth*" />
                  <Field component={ButtonField} label="Save" />
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </form>
              )
            }}
            />
          </div>
        </article>
      </section>
    )
  }
}

export default PersonalDetails;