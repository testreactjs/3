import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffTypes = [];



export const staffTypesReducer = handleActions(
  {
    [types.UPDATE_STAFF_MEMBERS]: (state, action) => {
      const { payload: { staffTypes } } = action
      return staffTypes;
    }
  }, initialStateStaffTypes);
