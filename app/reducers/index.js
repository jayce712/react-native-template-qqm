/*
 * @Author: laijie
 * @Date: 2017-03-27 17:21:57
 * @Last Modified by: laijie
 * @Last Modified time: 2017-05-05 18:24:51
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from './nav';
import loading from './loading';

const appReducer = combineReducers({
  form,
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
