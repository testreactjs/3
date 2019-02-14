import { createSelector } from 'reselect';

const staffMembersSelector = data => data.staffMembers;
const staffTypesDataSelector = data => data.staffTypes;
const venuesDataSelector = data => data.venues;


export const getStaffMembers = createSelector(

  [staffMembersSelector, staffTypesDataSelector, venuesDataSelector],
  (staffMembers, staffTypes2, venues2) => {
    return staffMembers;
    /*
    return staffMembers.map(staffMember => {
       //console.log(staffMember)
       const { staffTypeId: staffId, masterVenueId: venueId } = staffMember;
       //console.log(staffTypes2, venues2)
       const staffTypeId = staffTypes2.find(value => value.id === staffId)
       const masterVenueId = venues2.find(value => value.id === venueId)
       //console.log(staffTypeId, masterVenueId)
       return {
         ...staffMember, staffTypeId, masterVenueId
       }
    })
    */
  }
)