import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducer/index'
import { rootReducerStaffMembers } from '../pages/staff-members/redux/reducer';
import { rootReducerStaffMember } from '../pages/staff-member/staff-member-profile/redux/reducer';

const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);


export default createStore(rootReducer, enhancer);


