import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateGenderValues = [];

export const genderValuesReducer = handleActions(
  {
    [types.INITIAL_LOAD_EDIT_PROFILE]: (state, action) => {
      const {
        payload: { genderValues },
      } = action;
      return genderValues;
    },
  },
  initialStateGenderValues,
);
