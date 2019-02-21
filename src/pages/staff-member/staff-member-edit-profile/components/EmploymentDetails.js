import React from 'react';
import EmploymentDetailsForm from './EmploymentDetailsForm';

class EmploymentDetails extends React.Component {
  render() {
    const {
      staffMember: {
        id,
        masterVenueId,
        otherVenueIds,
        staffTypeId,
        startsAt,
        payRateId,
        dayPreferenceNote,
        hoursPreferenceNote,
        nationalInsuranceNumber,
        sageId,
        statusStatement,
        staffTypes,
        payRates,
        venues,
      },
      staffTypesOptions,
      venuesOptions,
      payRatesOptions,
    } = this.props;

    const initialValues = {
      id,
      masterVenue: masterVenueId,
      otherVenues: otherVenueIds,
      staffType: staffTypeId,
      startsAt,
      payRateId,
      dayPreferenceNote,
      hoursPreferenceNote,
      nationalInsuranceNumber,
      sageId,
      employmentStatus: statusStatement,
      staffTypes,
      payRates,
      venues,
    };
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
            <EmploymentDetailsForm
              initialValues={initialValues}
              onSubmit={this.props.onSubmit}
              staffTypesOptions={staffTypesOptions}
              payRatesOptions={payRatesOptions}
              venuesOptions={venuesOptions}
            />
          </div>
        </article>
      </section>
    );
  }
}

export default EmploymentDetails;
