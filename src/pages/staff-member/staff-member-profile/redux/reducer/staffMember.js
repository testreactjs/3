import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffMember = [];

export const staffMemberReducer = handleActions(
  {
    [types.UPDATE_STAFF_MEMBER]: (state, action) => {
      const { payload: { staffMember } } = action
      return staffMember;
    }
  }, initialStateStaffMember);