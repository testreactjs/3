import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffMembers  = [];

export const staffMembersReducer = handleActions(
  {
    [types.UPDATE_STAFF_MEMBERS]: (state, action) => {
      console.log("UPDATE_STAFF_MEMBERS", action);
      const {payload: {staffMembers, staffTypes, venues}} = action
      console.log("UPDATE_STAFF_MEMBERS", {staffMembers, staffTypes, venues});
      return {...state, staffMembers, staffTypes, venues};
    }

  },
  initialStateStaffMembers);


