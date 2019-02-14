import { combineReducers } from 'redux';
import {staffMembersReducer} from './staffMembers'
import {staffTypesReducer} from './staffTypes'
import {venuesReducer} from './venues'
export const rootReducer = combineReducers({
  staffMembersReducer: staffMembersReducer,
  //staffTypes: staffTypesReducer,
  //venues: venuesReducer

});