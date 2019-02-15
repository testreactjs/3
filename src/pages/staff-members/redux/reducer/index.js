import { combineReducers } from 'redux';
import {staffMembersReducer} from './staffMembers'
import {staffTypesReducer} from './staffTypes'
import {venuesReducer} from './venues'

export const rootReducer = combineReducers({
  staffMembers: staffMembersReducer,
  staffTypes: staffTypesReducer,
  venues: venuesReducer,
});

