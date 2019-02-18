import { combineReducers } from 'redux';
import { staffMemberReducer } from './staffMember';
import { staffTypesReducer } from './staffTypes';
import { venuesReducer } from './venues';
import { genderValuesReducer } from './genderValues';
import { payRatesReducer } from './payRates';

export const rootReducerEditProfile = combineReducers({
  staffMember: staffMemberReducer,
  staffTypes: staffTypesReducer,
  venues: venuesReducer,
  genderValues: genderValuesReducer,
  payRates: payRatesReducer,
});
