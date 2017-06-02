/*
 * @Author: Lockie
 * @Date: 2017-03-27 10:20:56
 * @Last Modified by: Lockie
 * @Last Modified time: 2017-06-02 17:36:38
 */
import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import AppWithNavigationState from './AppWithNavigationState';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            showHideTransition={'fade'}
            barStyle={'light-content'}
          />
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

export default App;
