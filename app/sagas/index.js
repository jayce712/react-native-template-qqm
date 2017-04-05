/*
 * @Author: laijie
 * @Date: 2017-03-27 17:21:45
 * @Last Modified by: laijie
 * @Last Modified time: 2017-03-29 13:44:19
 */
import { fork } from 'redux-saga/effects';
import { api, pubApi } from '../utils/api';
import pubApiSaga from './pubApi';

//发起fetch的saga
const sagas = [].concat(api.sagas, pubApi.sagas);

sagas.push(pubApiSaga);

export default function* rootSaga() {
  for (let i = 0; i < sagas.length; i++) {
    yield fork(sagas[i]);
  }
}
