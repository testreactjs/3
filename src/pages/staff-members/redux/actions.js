import * as types from './types'
import { createAction } from 'redux-actions';
import http from '../../../utils/http-service';
import ApiService from '../../../utils/api-service';


export const initialLoadStaffMembers = createAction(types.INITIAL_LOAD);


export const initialLoadAction = () => (dispatch) => {
  return http.get(ApiService.staffMembersApiURL.getPath())
    .then(response => {
      dispatch(initialLoadStaffMembers(response.data))
    })
};
