import { ToastAndroid, Keyboard, BackHandler, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import store from '@app/store';

const push = (routeName, params = {}, action) => {
  const { dispatch } = store;
  const navigateAction = NavigationActions.navigate({
    routeName: routeName,
    params: params,
    action: action
  });
  Keyboard.dismiss(); //push新页面的时候隐藏键盘;
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
  const { dispatch } = store;
  const setParamsAction = NavigationActions.setParams(params);
  dispatch(setParamsAction);
};

let cacheRouteName;
let action;
let timer;
let backTwice = false;

//backAction只记录一次
const backHandle = (fn: Function) => {
  const { index, routes } = store.getState().nav;
  cacheRouteName = routes[index].routeName;
  action = fn;
};

const backAction = () => {
  const { index: currentIndex, routes } = store.getState().nav;
  const currentRouteName = routes[currentIndex].routeName;
  if (cacheRouteName === currentRouteName) {
    if (action instanceof Function) {
      console.info('____________ 自定义返回按键 ____________');
      action();
    } else {
      pop();
    }
  } else if (currentIndex === 0 && Platform.OS === 'android') {
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
  } else {
    pop();
  }
  return true;
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
