import { combineReducers } from 'redux';
import {staffMemberReducer} from './staffMember'
import {staffTypesReducer} from './staffTypes'
import {venuesReducer} from './venues'

export const rootReducerStaffMember = combineReducers({
  staffMember: staffMemberReducer,
  staffTypes: staffTypesReducer,
  venues: venuesReducer,
});


