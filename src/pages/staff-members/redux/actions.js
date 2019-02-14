import * as types from './types'
import { createAction } from 'redux-actions';
import * as API from '../../../utils/api-service'
import http from '../../../utils/http-service';
import ApiService from '../../../utils/api-service';
// api/v1/staff_members
export const initialLoad = createAction(types.UPDATE_STAFF_MEMBERS);

export const initialLoadAction = () => (dispatch) => {
  return http.get(ApiService.staffMembersApiURL.getPath())
    .then(response => {
      console.log("initialLoadAction", response.data)
      dispatch(initialLoad(response.data))
    })
};
