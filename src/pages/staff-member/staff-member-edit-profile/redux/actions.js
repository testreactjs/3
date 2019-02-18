import { createAction } from 'redux-actions';
import * as types from './types';
import http from '../../../../utils/http-service';
import ApiService from '../../../../utils/api-service';

export const initialLoadEditProfile = createAction(types.INITIAL_LOAD_EDIT_PROFILE);

export const initialLoadActionEditProfile = id => dispatch => {
  // console.log('initialLoadActionEmploymentDetails', id);
  return http.get(ApiService.staffMember.getPath(id)).then(response => {
    // console.log('initialLoadActionEmploymentDetails', response.data);
    dispatch(initialLoadEditProfile(response.data));
  });
};
