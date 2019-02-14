import { combineReducers } from 'redux';
import {staffMembersReducer} from './staffMembers'

export const rootReducer = combineReducers({
  staffMembers: staffMembersReducer,


});