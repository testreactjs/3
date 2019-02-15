import * as types from './types'
import { createAction } from 'redux-actions';
import http from '../../../utils/http-service';
import ApiService from '../../../utils/api-service';


export const initialLoadStaffMembers = createAction(types.UPDATE_STAFF_MEMBERS);
export const initialLoadStaffTypes = createAction(types.UPDATE_STAFF_TYPES);
export const initialLoadVenues = createAction(types.UPDATE_VENUES);

export const initialLoadAction = () => (dispatch) => {
  return http.get(ApiService.staffMembersApiURL.getPath())
    .then(response => {
      dispatch(initialLoadStaffMembers(response.data))
    })
};
