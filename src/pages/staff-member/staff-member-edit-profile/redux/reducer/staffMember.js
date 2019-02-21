import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateStaffMember = [];

export const staffMemberReducer = handleActions(
  {
    [types.INITIAL_LOAD_EDIT_PROFILE]: (state, action) => {
      const {
        payload: { staffMember },
      } = action;
      return staffMember;
    },
    [types.UPDATE_STAFF_MEMBER_PROFILE]: (state, action) => {
      // console.log('UPDATE_STAFF_MEMBER_PROFILE');
      return action.payload;
    },
  },
  initialStateStaffMember,
);
