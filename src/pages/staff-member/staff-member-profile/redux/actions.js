import { createAction } from 'redux-actions';
import * as types from './types';
import http from '../../../../utils/http-service';
import ApiService from '../../../../utils/api-service';

export const initialLoadStaffMember = createAction(types.INITIAL_LOAD_PROFILE);

export const initialLoadActionStaffMember = id => dispatch => {
  return http.get(ApiService.staffMember.getPath(id)).then(response => {
    dispatch(initialLoadStaffMember(response.data));
  });
};
