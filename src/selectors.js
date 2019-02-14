import { createSelector } from 'reselect';
import {store} from './redux/store'

const staffMembersData = data => data.staffMembers.staffMembers;
const staffTypesData = data => data.staffMembers.staffTypes;
const venuesData = data => data.staffMembers.venues;


export const membersSelector = createSelector(
  [staffMembersData, staffTypesData, venuesData],
  (users, staff, venues) => {
    return users.map(user => {
      //console.log("staff, venues", staff, venues);
      const {staffTypeId: staffId, masterVenueId: venueId} = user;
      //console.log("staffId, venueId", staffId, venueId);
      const staffTypeId = staff.find(value => value.id === staffId)
      const masterVenueId = venues.find(value=>value.id === venueId)
      //console.log(staffTypeId, masterVenueId);
      return {
        ...user, staffTypeId, masterVenueId
      }


    })
  }
)
/*

staffMembers:
staffMembers:
staffTypes:
venues:

stafMembers: [ {avatarUrl: null
firstName: "Qwertq"
id: 340
masterVenueId: 4
staffTypeId: 1
status: "enabled"
surname: "Terry"},]

staffTypes: [{id: 1, name: "Bar Back", color: "#EC6A6A"},]

venues: [{id: 1, name: "Maroon"}]
*/
//export const testSelector = () => console.log("Selectors ", membersSelector(store.getState()));