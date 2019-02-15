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


