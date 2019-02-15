import { createSelector } from 'reselect';

const staffMemberSelector = data => data.staffMemberPage.staffMember;
const staffTypesDataSelector = data => data.staffMemberPage.staffTypes;
const venuesDataSelector = data => data.staffMemberPage.venues;

//const staffMemberSelector = data => data.staffMember.staffMember;


export const getStaffMember = createSelector(

  [staffMemberSelector, staffTypesDataSelector, venuesDataSelector],
  (staffMember, staffTypes, venues) => {
    console.log(staffMember)
    const { staffTypeId, masterVenueId } = staffMember;
    const staffType = staffTypes.find(value => value.id === staffTypeId)
    const venue = venues.find(value => value.id === masterVenueId)
    return {
      ...staffMember,
      staffType,
      staffTypeName: staffType ? staffType.name : 'N/A',
      venueName: venue ? venue.name: 'N/A',
      isActive: staffMember.isDisabled ? 'Disabled': 'Active',
      //: staffType ? staffType.name : 'N/A',
      //staffTypeColor: staffType.color,
      //masterVenue: venue ?  venue.name : 'N/A',
    }
  }
)

