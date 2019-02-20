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
    [types.CHANGE_PERSONAL_DETAILS]: (state, action) => {
      return action.payload;
    },
  },
  initialStateStaffMember,
);
