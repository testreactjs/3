import { createSelector } from 'reselect';

const staffMembersSelector = data => data.staffMembers;
const staffTypesDataSelector = data => data.staffTypes;
const venuesDataSelector = data => data.venues;


export const getStaffMembers = createSelector(

  [staffMembersSelector, staffTypesDataSelector, venuesDataSelector],
  (staffMembers, staffTypes, venues) => {
    //return staffMembers;

    return staffMembers.map(staffMember => {
       //console.log(staffMembers, staffTypes, venues)
       const { staffTypeId: idStaffTypes, masterVenueId: idVenue } = staffMember;
       //console.log(idStaffTypes, idVenue)
       const staffTypeId = staffTypes.find(value => value.id === idStaffTypes)
       const venueId = venues.find(value => value.id === idVenue)
       //console.log(staffTypeId, masterVenueId)
       return {
         ...staffMember, staffTypeId, venueId
       }
    })

  }
)