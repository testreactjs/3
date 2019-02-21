import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStatePayRates = [];

export const payRatesReducer = handleActions(
  {
    [types.INITIAL_LOAD_PROFILE]: (state, action) => {
      const {
        payload: { payRates },
      } = action;
      return payRates;
    },
  },
  initialStatePayRates,
);
