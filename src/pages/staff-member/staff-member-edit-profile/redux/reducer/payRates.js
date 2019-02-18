import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStatePayRates = [];

export const payRatesReducer = handleActions(
  {
    [types.INITIAL_LOAD_EDIT_PROFILE]: (state, action) => {
      // console.log('INITIAL_LOAD_PROFILE', action);
      const {
        payload: { payRates },
      } = action;
      return payRates;
    },
  },
  initialStatePayRates,
);
