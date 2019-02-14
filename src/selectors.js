import { createSelector } from 'reselect';

const staffMembersData = data => data.staffMembers.staffMembers;
const staffTypesData = data => data.staffMembers.staffTypes;
const venuesData = data => data.staffMembers.venues;


export const membersSelector = createSelector(
  [staffMembersData, staffTypesData, venuesData],
  (users, staff, venues) => {
    return users.map(user => {
      const { staffTypeId: staffId, masterVenueId: venueId } = user;
      const staffTypeId = staff.find(value => value.id === staffId)
      const masterVenueId = venues.find(value => value.id === venueId)
      return {
        ...user, staffTypeId, masterVenueId
      }
    })
  }
)