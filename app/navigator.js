import React from 'react';
import { StackNavigator } from 'react-navigation';


//containers
import Home from './containers/index';

const AppNavigator = StackNavigator({
  home: {
    screen: Home,
  },
}, {});

export default AppNavigator;
