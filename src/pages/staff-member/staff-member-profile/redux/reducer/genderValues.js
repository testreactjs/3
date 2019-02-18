import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateGenderValues = [];

export const genderValuesReducer = handleActions(
  {
    [types.INITIAL_LOAD_PROFILE]: (state, action) => {
      // console.log('INITIAL_LOAD_PROFILE', action);
      const {
        payload: { genderValues },
      } = action;
      return genderValues;
    },
  },
  initialStateGenderValues,
);
