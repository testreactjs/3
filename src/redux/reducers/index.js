import { combineReducers } from 'redux';
import {staffMembersReducer} from '../../pages/staff-members/redux/reducer/staffMembers'
import {staffTypesReducer} from '../../pages/staff-members/redux/reducer/staffTypes'
import {venuesReducer} from '../../pages/staff-members/redux/reducer/venues'

export const rootReducer = combineReducers({
  staffMembers: staffMembersReducer,
  stafTypes: staffTypesReducer,
  venues: venuesReducer,
});

