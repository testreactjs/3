import React from 'react';
import ContactDetailsForm from './ContactDetailsForm';

class ContactDetails extends React.Component {
  onSubmit = () => {
    console.log('onSubmit ContactDetails');
  };

  render() {
    const {data} = this.props;
    return (
      <section className="boss-content-switcher__chapters">
        <article
          className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
          data-chapter="employment"
        >
          <header className="boss-content-switcher__header">
            <h2 className="boss-content-switcher__title">Contact Details</h2>
          </header>
          <div className="boss-content-switcher__content">
            <ContactDetailsForm data={data} />
          </div>
        </article>
      </section>
    );
  }
}

export default ContactDetails;
