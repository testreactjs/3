import * as types from './types'
import { createAction } from 'redux-actions';
import * as API from '../utils/api-service'
import axios from 'axios'

// api/v1/staff_members
export const updateStaffMembersAction = createAction(types.UPDATE_STAFF_MEMBERS);

export const fetchStaffMembersAction = () => {
  return (dispatch) => {
    return axios.get(API.staffMembersUrlAPI, API.configAPI)
      .then(response => {
        dispatch(updateStaffMembersAction(response.data))
      })
      .catch(error => {
        console.log("ERROR! axios.get fetchStaffMembersAction", error);
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