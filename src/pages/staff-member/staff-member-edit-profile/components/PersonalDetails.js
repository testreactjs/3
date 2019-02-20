import React from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';

class PersonalDetails extends React.Component {
  render() {
    const {
      staffMember: { id, firstName, surname, dateOfBirth, gender },
      genderOptions,
    } = this.props;

    const initialValues = {
      id,
      firstName,
      surname,
      dateOfBirth,
      gender,
    };
    return (
      <section className="boss-content-switcher__chapters">
        <article
          className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
          data-chapter="employment"
        >
          <header className="boss-content-switcher__header">
            <h2 className="boss-content-switcher__title">Personal Details</h2>
          </header>
          <div className="boss-content-switcher__content">
            <PersonalDetailsForm
              initialValues={initialValues}
              genderOptions={genderOptions}
              onSubmit={this.props.onSubmit}
            />
          </div>
        </article>
      </section>
    );
  }
}

export default PersonalDetails;

// <pre>{JSON.stringify(values, null, 2)}</pre>
