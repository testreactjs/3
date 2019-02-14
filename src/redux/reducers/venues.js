import { handleActions } from 'redux-actions';
const initialStateVenues  = []

export const venuesReducer = handleActions({}, initialStateVenues);