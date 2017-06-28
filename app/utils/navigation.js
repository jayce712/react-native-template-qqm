import { ToastAndroid, BackHandler, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import store from '../store';

const push = (routeName, params = {}, action) => {
  const { dispatch } = store;
  const navigateAction = NavigationActions.navigate({
    routeName: routeName,
    params: params,
    action: action
  });
  dispatch(navigateAction);
};

const pop = (n = 1) => {
  const { dispatch, getState } = store;
  if (n > 1) {
    const index = n - 1;
    const { index: stateIndex, routes } = getState().nav;
    const routesIndex = stateIndex - index;
    if (routesIndex > 0) {
      const key = routes[routesIndex].key;
      const backAction = NavigationActions.back({ key: key });
      dispatch(backAction);
    } else {
      console.warn(`当前堆栈个数:${stateIndex + 1},需要pop的个数:${n},超过堆栈最大pop个数`);
    }
  } else {
    const backAction = NavigationActions.back({ key: null });
    dispatch(backAction);
  }
};

const popTo = (routeName = 'homeIndex') => {
  const { dispatch, getState } = store;
  const { routes } = getState().nav;
  let routesIndex;
  for (let i in routes) {
    const route = routes[i];
    if (route.routeName === routeName) {
      routesIndex = parseInt(i, 10) + 1;
      break;
    }
  }
  if (routesIndex) {
    const key = routes[routesIndex].key;
    const backAction = NavigationActions.back({ key: key });
    dispatch(backAction);
  } else {
    console.warn(`堆栈中没有 ${routeName} 页面`);
  }
};

const reset = (routeName = 'homeIndex') => {
  const { dispatch } = store;
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: routeName })]
  });
  dispatch(resetAction);
};

const setParams = (params = {}) => {
  const { dispatch, getState } = store;
  const { routes, index } = getState().nav;
  const payload = {
    params: params,
    key: routes[index].key
  };
  const setParamsAction = NavigationActions.setParams(payload);
  dispatch(setParamsAction);
};

let timer;
let backTwice = false;
const backActions = {};

const backHandle = (action) => {
  if (action instanceof Function) {
    const { routeName } = store.getState().nav;
    backActions[routeName] = action;
  } else {
    console.warn('参数必须为Function');
  }
};

const backAction = () => {
  const { routeName, index: currentIndex } = store.getState().nav;
  if (currentIndex !== 0) {
    if (backActions[routeName] instanceof Function) {
      backActions[routeName]();
    } else {
      pop();
    }
    return true;
  } else if (Platform.OS === 'android') {
    if (!backTwice) {
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      backTwice = true;
      timer = setTimeout(() => {
        backTwice = false;
      }, 2000);
      return true;
    } else {
      backTwice = false;
      clearTimeout(timer);
      BackHandler.exitApp();
      return false;
    }
  }
};

export default {
  push,
  pop,
  popTo,
  reset,
  setParams,
  backHandle,
  backAction
};
