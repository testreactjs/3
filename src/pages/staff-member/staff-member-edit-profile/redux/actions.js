import { createAction } from 'redux-actions';
import * as types from './types';
import http from '../../../../utils/http-service';
import ApiService from '../../../../utils/api-service';

export const initialLoadEditProfile = createAction(types.INITIAL_LOAD_EDIT_PROFILE);
export const changeStaffMemberProfile = createAction(types.UPDATE_STAFF_MEMBER_PROFILE);

export const initialLoadActionEditProfile = id => dispatch => {
  return http.get(ApiService.staffMember.getPath(id)).then(response => {
    dispatch(initialLoadEditProfile(response.data));
  });
};

export const updateEmploymentDetailsAction = ({ id, ...values }) => dispatch => {
  return http.post(ApiService.updateEmploymentDetails.getPath(id), JSON.stringify(values)).then(response => {
    if (response.status !== 422) {
      dispatch(changeStaffMemberProfile(response.data));
    }
    return response;
  });
};
export const updatePersonalDetailsAction = ({ id, ...values }) => dispatch => {
  return http.post(ApiService.updatePersonalDetails.getPath(id), JSON.stringify(values)).then(response => {
    if (response.status !== 422) {
      dispatch(changeStaffMemberProfile(response.data));
    }
    return response;
  });
};
export const updateContactDetailsAction = ({ id, ...values }) => dispatch => {
  return http.post(ApiService.updateContactDetails.getPath(id), JSON.stringify(values)).then(response => {
    if (response.status !== 422) {
      dispatch(changeStaffMemberProfile(response.data));
    }
    return response;
  });
};
