/*
 * @Author: laijie
 * @Date: 2017-03-27 10:20:56
 * @Last Modified by: laijie
 * @Last Modified time: 2017-04-05 11:45:33
 */
import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Platform
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import store from './store';
import Home from './containers/index';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Home" component={Home} title={'Home'} />
  </Scene>
);

const RouterWithRedux = connect()(Router);

class App extends Component {
  render() {
    console.log(StatusBar.currentHeight);
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            showHideTransition={'fade'}
            barStyle={'dark-content'}
          />
          <RouterWithRedux scenes={scenes} sceneStyle={styles.contianer} backAndroidHandler={() => { console.log('点击了android物理按键'); return true; }} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 54,
      },
    }),
  }
});

export default App;
