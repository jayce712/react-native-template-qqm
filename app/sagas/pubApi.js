/*
 * @Author: laijie
 * @Date: 2017-03-27 17:45:52
 * @Last Modified by: laijie
 * @Last Modified time: 2017-03-28 16:12:12
 */

import { fork, take } from 'redux-saga/effects';

function* watchAd() {
  while (true) {
    const response = yield take('pubApi/fast/ad/success');
    console.log(response); //包含了req和res
  }
}

export default function* () {
  yield fork(watchAd);
}
