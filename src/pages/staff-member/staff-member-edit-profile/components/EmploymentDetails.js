import React from 'react';
import EmploymentDetailsForm from './EmploymentDetailsForm';

class EmploymentDetails extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section className="boss-content-switcher__chapters">
        <article
          className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
          data-chapter="employment"
        >
          <header className="boss-content-switcher__header">
            <h2 className="boss-content-switcher__title">Employment Details</h2>
          </header>
          <div className="boss-content-switcher__content">
            <EmploymentDetailsForm data={data} onChange={this.props.onChange} />
          </div>
        </article>
      </section>
    );
  }
}

export default EmploymentDetails;
