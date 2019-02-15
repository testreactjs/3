import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffMembers = [];

export const staffMembersReducer = handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const { payload: { staffMembers } } = action
      return staffMembers;
    }
  }, initialStateStaffMembers);


