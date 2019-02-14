import * as types from './types'
import { createAction } from 'redux-actions';
import * as API from '../../../utils/api-service'
import instance from '../../../utils/http-service';
import ApiService from '../../../utils/api-service';
// api/v1/staff_members
export const updateStaffMembersAction = createAction(types.UPDATE_STAFF_MEMBERS);



export const fetchStaffMembersAction = () => {
  return (dispatch) => {
    return instance.get(ApiService.staffMembersApiURL.getPath())
      .then(response => {
        //console.log(response.data);
        dispatch(updateStaffMembersAction(response.data))
      })
      .catch(error => {
        console.log("ERROR! ", error);
      });
  };
};

//export const updateStaffTypesAction = createAction(types.UPDATE_STAFF_TYPES);
//export const updateVenues = createAction(types.updateVenues);



/*
export const actionDataStarted = () => ({type: types.API_DATA_STARTED});
export const actionDataSuccess = data => ({type: types.API_DATA_SUCCESS, payload: data })
export const actionDataError = message => ({type: types.API_DATA_ERROR, payload: message})

const actionGetDataFromAPI = () => {
  return dispath = {
    dispath(actionDataStarted())

    API.getData()
      .then(data => dispath(actionDataSuccess(data)))
      .catch(err => dispatch(actionDataError(err.message)))

  }
}

*/