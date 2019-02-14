import { createSelector } from 'reselect';

const staffMembersSelector = data => data.staffMembers;
// const staffTypesData = data => data.staffMembers.staffTypes;
// const venuesData = data => data.staffMembers.venues;


export const getStaffMembers = createSelector(
  [staffMembersSelector],
  (staffMembers) => {
    return staffMembers;
    // return staffMembers.map(user => {
    //   const { staffTypeId: staffId, masterVenueId: venueId } = user;
    //   const staffTypeId = staff.find(value => value.id === staffId)
    //   const masterVenueId = venues.find(value => value.id === venueId)
    //   return {
    //     ...user, staffTypeId, masterVenueId
    //   }
    // })
  }
)