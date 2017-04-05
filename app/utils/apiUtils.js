/*
 * @Author: laijie
 * @Date: 2017-03-27 11:22:37
 * @Last Modified by: laijie
 * @Last Modified time: 2017-03-28 16:41:32
 */
import { createAction } from 'redux-actions';
import { call, put, take } from 'redux-saga/effects';
import querystring from 'querystring';
import xFetch from './xFetch';

/**
 * @param {String} url
 * @param {String} basePath
 * @param {Object} api
 * @returns promise
 */
function makeMethod(url: String, basePath: String, api: Object) {
  return async (data) => {
    let opts = {};
    let uri = '';
    if (basePath) {
      uri = `${url}${basePath}/${api.path}`;
    } else {
      uri = url + api.path;
    }
    const method = api.method.toUpperCase();
    if (method === 'POST') {
      opts = {
        method: 'POST',
        body: data ? JSON.stringify(data) : null,
      };
    } else {
      if (data) {
        uri = `${url}?${querystring.stringify(data)}`;
      }
      opts = {
        method: 'GET',
      };
    }
    console.log('网络请求链接', uri);
    console.log('网络请求参数', opts);
    const res = await xFetch(uri, opts);
    return res;
  };
}


/**
 * 创建action名字
 *
 * @param {String} basePath api的前缀,'api' or 'pubApi'
 * @param {String} path
 * @returns object
 */
function makeActionNames(basePath: String, path: String) {
  return {
    request: `${basePath}/${path}/request`,
    success: `${basePath}/${path}/success`,
    error: `${basePath}/${path}/error`,
  };
}


/**
 * 请求大概流程:
 *
 * 发起对应api名字的action
 * saga监听到这个action name
 * 从这个action里面获取请求参数
 * saga call调用fetch请求
 * 等待返回的参数
 * 成功,发起对应接口success的action,并把请求的req和返回的res放到这个aciton中
 * 失败,发起对应接口error的aciton
 *
 * @param {Function} request
 * @param {Object} actionNames
 * @returns
 */
let index = 0;
function makeEffect(request: Function, actionNames: Object) {
  return function* effect() {
    while (true) {
      const req = yield take(actionNames.request);
      if (index === 0) {
        yield put(createAction('fetch/start')());
      }
      index++;
      try {
        const response = yield call(request, req.payload);
        console.log('网络请求返回数据', response);
        //可以在这里对response做一些通用操作
        yield put(createAction(actionNames.success)({
          req: req.payload || null,
          res: response,
        }));
      } catch (error) {
        console.log('网络请求返回错误', error);
        let errorMessage = '未知错误';
        if (error.des) {
          errorMessage = error.des;
        } else if (error.message) {
          errorMessage = '网络错误';
        } else if (typeof error === 'string') {
          errorMessage = error;
        }
        yield put(createAction(actionNames.error)({
          error: errorMessage,
        }));
      }
      index--;
      if (index === 0) {
        yield put(createAction('fetch/end')());
      }
    }
  };
}


/**
 *
 * @param {String} url
 * @param {String} basePath api的前缀,'api' or 'pubApi'
 * @param {any} api Object or Array
 */
function makeApi(url: String, basePath: String, api: any) {
  const apiActions = {};
  const sagas = [];
  //判断api传进来的是Array还是Obejct
  if (api instanceof Array) {
    api.forEach((apiItem) => {
      const path = apiItem.path;
      const actionNames = makeActionNames(basePath || 'pubApi', path);
      const request = makeMethod(url, null, apiItem);
      const effect = makeEffect(request, actionNames);
      apiActions[path] = createAction(actionNames.request);
      sagas.push(effect);
    });
  } else {
    for (let cat in api) {
      apiActions[cat] = {};
      api[cat].forEach((apiItem) => {
        const path = apiItem.path;
        const actionNames = makeActionNames(basePath || 'api', `${cat}/${path}`);
        const request = makeMethod(url, cat, apiItem);
        const effect = makeEffect(request, actionNames);
        apiActions[cat][path] = createAction(actionNames.request);
        sagas.push(effect);
      });
    }
  }
  return {
    apiActions,
    sagas,
  };
}

export default makeApi;
