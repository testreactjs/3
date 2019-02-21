import { createSelector } from 'reselect';
import { toTitle } from '../../../utils/functions';

const noData = 'N/A';

export const staffMemberSelector = data => data.staffMemberEditPage.staffMember;
const staffTypesDataSelector = data => data.staffMemberEditPage.staffTypes;
const venuesDataSelector = data => data.staffMemberEditPage.venues;
const genderValuesDataSelector = data => data.staffMemberEditPage.genderValues;
const payRatesDataSelector = data => data.staffMemberEditPage.payRates;
// const staffMemberSelector = data => data.staffMember.staffMember;

export const getEditProfile = createSelector(
  [staffMemberSelector, staffTypesDataSelector, venuesDataSelector, genderValuesDataSelector, payRatesDataSelector],
  (staffMember, staffTypes, venues, genders, payRates) => {
    const { staffTypeId, masterVenueId, otherVenueIds, payRateId } = staffMember;
    const staffType = staffTypes.find(value => value.id === staffTypeId);
    const venue = venues.find(value => value.id === masterVenueId);
    const otherVenues = venues.find(value => value.id === otherVenueIds);
    const payRate = payRates.find(value => value.id === payRateId);
    return {
      ...staffMember,
      staffType,
      staffTypeName: staffType ? staffType.name : noData,
      venueName: venue ? venue.name : noData,
      isActive: staffMember.isDisabled ? 'Disabled' : 'Active',
      payRate: payRate ? payRate.name : noData,
      otherVenues: otherVenues ? otherVenues.join(', ') : '',
    };
  },
);
export const getStaffTypesOptions = createSelector(
  [staffTypesDataSelector],
  staffTypes => {
    return [...staffTypes];
  },
);

export const getVenues = createSelector(
  [venuesDataSelector],
  venues => {
    return [...venues];
  },
);

export const getGenderValues = createSelector(
  [genderValuesDataSelector],
  genderValues => {
    return [...genderValues];
  },
);

export const getGenderOptions = createSelector(
  [genderValuesDataSelector],
  genderValues => {
    return genderValues.map(value => {
      return {
        value,
        label: toTitle(value),
      };
    });
  },
);
export const getVenuesOptions = createSelector(
  [venuesDataSelector],
  venues => {
    return venues.map(value => {
      return { value: value.id, label: value.name };
    });
  },
);

export const getPayRatesOptions = createSelector(
  [payRatesDataSelector],
  payRates => {
    return [...payRates];
  },
);
