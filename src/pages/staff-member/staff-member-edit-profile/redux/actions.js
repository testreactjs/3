import { createAction } from 'redux-actions';
import * as types from './types';
import http from '../../../../utils/http-service';
import ApiService from '../../../../utils/api-service';

export const initialLoadEditProfile = createAction(types.INITIAL_LOAD_EDIT_PROFILE);
export const changePersonalDetails = createAction(types.CHANGE_PERSONAL_DETAILS);

export const initialLoadActionEditProfile = id => dispatch => {
  // console.log('initialLoadActionEmploymentDetails', id);
  return http.get(ApiService.staffMember.getPath(id)).then(response => {
    // console.log('initialLoadActionEmploymentDetails', response.data);
    dispatch(initialLoadEditProfile(response.data));
  });
};

export const changePersonalDetailsAction = (id, values) => dispatch => {
  // console.log('changePersonalDetailsAction', id, JSON.stringify(values));
  // const sendData = JSON.stringify(values);
  return http.post(ApiService.updatePersonalDetails.getPath(id), JSON.stringify(values)).then(response => {
    console.log('changePersonalDetailsAction', response.data.errors);
    if (response.status !== 422) {
      // console.log('changePersonalDetailsAction', response.data);
      dispatch(changePersonalDetails(response.data));
    }
    return response;
  });
};
