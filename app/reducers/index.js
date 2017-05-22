/*
 * @Author: Lockie
 * @Date: 2017-03-27 17:21:57
 * @Last Modified by: Lockie
 * @Last Modified time: 2017-05-22 17:06:07
 */

import { combineReducers } from 'redux';
import nav from './nav';
import loading from './loading';

const appReducer = combineReducers({
  nav,
  loading,
});

const rootReducer = (state, action) => {
  if (action.type === 'fetch/logout') {
    const _state = { nav: state.nav };
    return appReducer(_state, action);
  } else {
    return appReducer(state, action);
  }
};

export default rootReducer;
