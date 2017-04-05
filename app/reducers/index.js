/*
 * @Author: laijie
 * @Date: 2017-03-27 17:21:57
 * @Last Modified by: laijie
 * @Last Modified time: 2017-03-28 16:52:56
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const appReducer = combineReducers({
  form,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
