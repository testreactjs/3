import { createSelector } from 'reselect';

const staffMembersSelector = data => data.staffMembersPage.staffMembers;
const staffTypesDataSelector = data => data.staffMembersPage.staffTypes;
const venuesDataSelector = data => data.staffMembersPage.venues;

//const staffMemberSelector = data => data.staffMember.staffMember;


export const getStaffMembers = createSelector(

  [staffMembersSelector, staffTypesDataSelector, venuesDataSelector],
  (staffMembers, staffTypes, venues) => {
    return staffMembers.map(staffMember => {
       //console.log(staffMembers, staffTypes, venues)
       const { staffTypeId, masterVenueId } = staffMember;
       //console.log(idStaffTypes, idVenue)
       const staffType = staffTypes.find(value => value.id === staffTypeId)
       const venue = venues.find(value => value.id === masterVenueId)
       //console.log(staffTypeId, masterVenueId)
       return {
         ...staffMember,
        staffType: staffType ? staffType.name : 'N/A',
        staffTypeColor: staffType.color,
        masterVenue: venue.name,
       }
    })
  }
)