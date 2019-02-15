import { combineReducers } from 'redux';
import {staffMemberReducer} from './staffMember'


export const rootReducerStaffMember = combineReducers({
  staffMember: staffMemberReducer,
});

