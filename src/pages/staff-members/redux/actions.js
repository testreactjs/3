import * as types from './types'
import { createAction } from 'redux-actions';
import * as API from '../../../utils/api-service'
import http from '../../../utils/http-service';
import ApiService from '../../../utils/api-service';


export const initialLoadStaffMembers = createAction(types.UPDATE_STAFF_MEMBERS);
export const initialLoadStaffTypes = createAction(types.UPDATE_STAFF_TYPES);
export const initialLoadvenues = createAction(types.UPDATE_VENUES);

export const initialLoadAction = () => (dispatch) => {
  return http.get(ApiService.staffMembersApiURL.getPath())
    .then(response => {
      console.log("initialLoadAction", response.data)
      dispatch(initialLoadStaffMembers(response.data))
      dispatch(initialLoadStaffTypes(response.data))
      dispatch(initialLoadvenues(response.data))
    })
};
