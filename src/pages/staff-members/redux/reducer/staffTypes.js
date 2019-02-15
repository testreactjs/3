import { handleActions } from 'redux-actions';
import * as types from '../types';
const initialStateStaffTypes = [];



export const staffTypesReducer = handleActions(
  {
    [types.INITIAL_LOAD]: (state, action) => {
      const { payload: { staffTypes } } = action
      return staffTypes;
    }
  }, initialStateStaffTypes);
