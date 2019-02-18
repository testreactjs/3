import { combineReducers } from 'redux';
import { employmentDetailsReducer } from './employmentDetails';
/*
import { staffTypesReducer } from './staffTypes';
import { venuesReducer } from './venues';
*/
export const rootReducerStaffMember = combineReducers({
  staffMember: employmentDetailsReducer,
  // staffTypes: staffTypesReducer,
  // venues: venuesReducer,
});
