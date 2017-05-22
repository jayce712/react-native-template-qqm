/*
 * @Author: Lockie
 * @Date: 2017-03-27 11:24:40
 * @Last Modified by: Lockie
 * @Last Modified time: 2017-05-22 17:33:34
 */
import { API_URL, PUB_API_URL } from '@app/config';
import makeApi from './apiUtils';

const API_PATH = {
  user: [
    {
      path: 'login',
      method: 'POST',
    },
  ]
};

const PUB_API_PATH = {
  test: [
    {
      path: 'ad',
      method: 'POST',
    },
  ]
};

const OTHERS_PATH = [
  {
    path: 'address',
    method: 'GET',
  }
];

const api = makeApi(API_URL, 'api', API_PATH);
const _pubApi = makeApi(PUB_API_URL, 'pubApi', PUB_API_PATH);
const _otherApi = makeApi(PUB_API_URL, 'pubApi', OTHERS_PATH);

//合并apiActions和sagas
const pubApi = {};
pubApi.apiActions = Object.assign({}, _pubApi.apiActions, _otherApi.apiActions);
pubApi.sagas = [].concat(_pubApi.sagas, _otherApi.sagas);

console.log('api', api);
console.log('pubApi', pubApi);

export {
  api,
  pubApi,
};

