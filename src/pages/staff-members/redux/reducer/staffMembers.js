import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffMembers = [];

export const staffMembersReducer = handleActions(
  {
    [types.UPDATE_STAFF_MEMBERS]: (state, action) => {
      const { payload: { staffMembers } } = action
      return staffMembers;
    }
  }, initialStateStaffMembers);

/*
export const staffMembersReducer = handleActions(
  {
    [types.UPDATE_STAFF_MEMBERS]: (state, action) => {
      const lol = action
      console.log("UPDATE_STAFF_MEMBERS", lol)
      const { payload: { staffMembers } } = action
      return staffMembers;
    }
  }, initialStateStaffMembers);


*/
