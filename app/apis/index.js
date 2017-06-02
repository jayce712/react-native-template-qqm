/*
 * @Author: Lockie
 * @Date: 2017-03-27 11:24:40
 * @Last Modified by: Lockie
 * @Last Modified time: 2017-06-02 17:35:44
 */
import config from '@app/config';
import makeApi from './apiUtils';

const API_PATH = {
  user: {
    register: {
      path: 'register',
      method: 'POST',
    },
    login: {
      path: 'login',
      method: 'POST',
    },
  },
  pub: {
    ad: {
      path: 'ad',
      method: 'POST',
    },
  },
};

const PUB_API_PATH = {
  address: {
    path: 'address',
    method: 'GET',
  },
};

const api = makeApi(config.API_URL, 'api', API_PATH);
const pubApi = makeApi(config.PUB_API_URL, 'pubApi', PUB_API_PATH);

console.log('api', api);
console.log('pubApi', pubApi);

export {
  api,
  pubApi,
};

