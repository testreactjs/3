import { handleActions } from 'redux-actions';
import * as types from '../types';

const initialStateEditEmploymentDetails = [];

export const employmentDetailsReducer = handleActions(
  {
    [types.INITIAL_LOAD_EDIT_PROFILE]: (state, action) => {
      console.log('INITIAL_LOAD_EDIT_PROFILE', action);
      const {
        payload: { employmentDetails },
      } = action;
      return employmentDetails;
    },
  },
  initialStateEditEmploymentDetails,
);
