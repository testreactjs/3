import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateStaffMember = [];

export const staffMemberReducer = handleActions(
  {
    [types.INITIAL_LOAD_PROFILE]: (state, action) => {
      console.log('INITIAL_LOAD_PROFILE', action);
      const {
        payload: { staffMember },
      } = action;
      return staffMember;
    },
  },
  initialStateStaffMember,
);
