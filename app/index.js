/*
 * @Author: laijie
 * @Date: 2017-03-27 10:20:56
 * @Last Modified by: laijie
 * @Last Modified time: 2017-05-05 18:34:12
 */
import React, { Component } from 'react';
import {
  View,
  BackHandler
} from 'react-native';
import { connect, Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import store from './store';
import navigation from './utils/navigation';
import AppNavigator from './navigator';

@connect(state => ({ nav: state.nav }))
class AppWithNavigationState extends Component {

  constructor(props) {
    super(props);
    this.backHandler = navigation.backAction;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator navigation={addNavigationHelpers({ dispatch: dispatch, state: nav })} />
    );
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppWithNavigationState />
      </View>
    </Provider>
  );
};

export default App;
