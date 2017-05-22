import React, { Component } from 'react';
import {
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { navigation } from './utils';
import AppNavigator from './AppNavigator';

class App extends Component {

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

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
