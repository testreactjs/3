import { createAction } from 'redux-actions';
import * as types from './types';
import http from '../../../../utils/http-service';
import ApiService from '../../../../utils/api-service';

export const initialLoadEmploymentDetails = createAction(types.INITIAL_LOAD_EDIT_PROFILE);

export const initialLoadActionEmploymentDetails = id => dispatch => {
  // console.log("initialLoadActionStaffMember", id)
  return http.get(ApiService.staffMemberProfile.getPath(id)).then(response => {
    // console.log('initialLoadStaffMember', response.data);
    dispatch(initialLoadEmploymentDetails(response.data));
  });
};
