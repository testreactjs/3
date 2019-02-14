import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffMembers  = {staffMembers: {staffMembers: [], staffTypes:[], venues: [] }};

export const staffMembersReducer = handleActions(
  {
    [types.UPDATE_STAFF_MEMBERS]: (state, action) => {
      const { payload: { staffMembers, staffTypes, venues } } = action
      return { ...state, staffMembers, staffTypes, venues };
    }

  },
  initialStateStaffMembers);


