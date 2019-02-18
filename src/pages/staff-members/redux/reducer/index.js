import { combineReducers } from 'redux';
import { staffMembersReducer } from './staffMembers';
import { staffTypesReducer } from './staffTypes';
import { venuesReducer } from './venues';

export const rootReducerStaffMembers = combineReducers({
  staffMembers: staffMembersReducer,
  staffTypes: staffTypesReducer,
  venues: venuesReducer,
});
