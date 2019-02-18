import { combineReducers } from 'redux';
import { staffMemberReducer } from './staffMember';
import { staffTypesReducer } from './staffTypes';
import { venuesReducer } from './venues';
import { payRatesReducer } from './payRates';
import { genderValuesReducer } from './genderValues';

export const rootReducerStaffMember = combineReducers({
  staffMember: staffMemberReducer,
  staffTypes: staffTypesReducer,
  venues: venuesReducer,
  payRates: payRatesReducer,
  genderValues: genderValuesReducer,
});
