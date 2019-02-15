import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffTypes = [];



export const staffTypesReducer = handleActions(
  {
    [types.UPDATE_STAFF_TYPES]: (state, action) => {
      //console.log("UPDATE_STAFF_TYPES")
      const { payload: { staffTypes } } = action
      return staffTypes;
    }
  }, initialStateStaffTypes);
