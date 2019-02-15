import * as types from './types'
import { createAction } from 'redux-actions';
import http from '../../../../utils/http-service';
import ApiService from '../../../../utils/api-service';


export const initialLoadStaffMember = createAction(types.UPDATE_STAFF_MEMBER);

export const initialLoadActionStaffMember = (id) => (dispatch) => {
  //console.log("initialLoadActionStaffMember", id)
  return http.get(ApiService.staffMember.getPath(id))
    .then(response => {
      console.log("initialLoadStaffMember", response.data)
      dispatch(initialLoadStaffMember(response.data))
    })
};
