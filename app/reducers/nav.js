import { handleActions } from 'redux-actions';
import { StatusBar, Platform } from 'react-native';
import AppNavigator from '../AppNavigator';

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'home',
      routeName: 'home',
    }
  ],
};

export default handleActions({
  'Navigation/NAVIGATE': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    newState.routeName = newState.routes[newState.index].routeName;
    return newState;
  },
  'Navigation/BACK': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    newState.routeName = newState.routes[newState.index].routeName;
    return newState;
  },
  'Navigation/RESET': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    newState.routeName = newState.routes[newState.index].routeName;
    return newState;
  },
  'Navigation/SET_PARAMS': (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    newState.routeName = newState.routes[newState.index].routeName;
    return newState;
  },
}, initialNavState);
