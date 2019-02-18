import React from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';

class PersonalDetails extends React.Component {

  onSubmit = () => {
    console.log('onSubmit.PersonalDetails');
  };

  render() {
    const { data } = this.props;
    console.log('PersonalDetails this.props', this.props);
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
            <PersonalDetailsForm data={data} />
          </div>
        </article>
      </section>
    );
  }
}

export default PersonalDetails;

// <pre>{JSON.stringify(values, null, 2)}</pre>
