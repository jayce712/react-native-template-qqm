/*
 * @Author: Lockie
 * @Date: 2017-03-13 15:44:02
 * @Last Modified by: Lockie
 * @Last Modified time: 2017-05-22 17:06:32
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (__DEV__) {
  middlewares.push(createLogger());
} else {
  //remove console
  global.console = {
    info: () => { },
    log: () => { },
    warn: () => { },
    error: () => { },
  };
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  __DEV__ && window && window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(sagas);

export default store;
