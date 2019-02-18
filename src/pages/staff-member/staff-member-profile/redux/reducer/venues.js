import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateVenues = [];

export const venuesReducer = handleActions(
  {
    [types.INITIAL_LOAD_PROFILE]: (state, action) => {
      const {
        payload: { venues },
      } = action;
      return venues;
    },
  },
  initialStateVenues,
);
