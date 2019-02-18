import { createSelector } from 'reselect';

const noData = 'N/A';

const staffMemberSelector = data => data.staffMemberPage.staffMember;
const staffTypesDataSelector = data => data.staffMemberPage.staffTypes;
const venuesDataSelector = data => data.staffMemberPage.venues;
const genderValuesDataSelector = data => data.staffMemberPage.genderValues;
const payRatesDataSelector = data => data.staffMemberPage.payRates;
// const staffMemberSelector = data => data.staffMember.staffMember;

export const getStaffMember = createSelector(
  [staffMemberSelector, staffTypesDataSelector, venuesDataSelector, genderValuesDataSelector, payRatesDataSelector],
  (staffMember, staffTypes, venues, genders, payRates) => {
    console.log('staffMember', staffMember);
    const { staffTypeId, masterVenueId, otherVenueIds, payRateId } = staffMember;
    const staffType = staffTypes.find(value => value.id === staffTypeId);
    const venue = venues.find(value => value.id === masterVenueId);
    const otherVenues = venues.find(value => value.id === otherVenueIds);
    const payRate = payRates.find(value => value.id === payRateId);
    // console.log(genders, payRate);
    return {
      ...staffMember,
      staffType,
      staffTypeName: staffType ? staffType.name : noData,
      venueName: venue ? venue.name : noData,
      isActive: staffMember.isDisabled ? 'Disabled' : 'Active',
      payRate: payRate ? payRate.name : noData,
      otherVenues: otherVenues ? otherVenues.join(', ') : '',
      // payRateId: payRate,
      // : staffType ? staffType.name : 'N/A',
      // staffTypeColor: staffType.color,
      // masterVenue: venue ?  venue.name : 'N/A',
    };
  },
);
