import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateStaffMember = [];

export const staffMemberReducer = handleActions(
  {
    [types.INITIAL_LOAD_PROFILE]: (state, action) => {
      const {
        payload: { staffMember },
      } = action;
      return staffMember;
    },
  },
  initialStateStaffMember,
);
