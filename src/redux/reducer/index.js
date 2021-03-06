import { combineReducers } from 'redux';
import { rootReducerStaffMembers } from '../../pages/staff-members/redux/reducer';
import { rootReducerStaffMember } from '../../pages/staff-member/staff-member-profile/redux/reducer';
import { rootReducerEditProfile } from '../../pages/staff-member/staff-member-edit-profile/redux/reducer';

export const rootReducer = combineReducers({
  staffMembersPage: rootReducerStaffMembers,
  staffMemberPage: rootReducerStaffMember,
  staffMemberEditPage: rootReducerEditProfile,
});
