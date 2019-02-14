import { combineReducers } from 'redux';
import {staffMembersReducer} from '../../pages/staff-members/redux/reducer/staffMembers'

export const rootReducer = combineReducers({
  staffMembers: staffMembersReducer,
});

