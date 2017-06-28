import React from 'react';
import { Platform, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'; //动画使用react-navgation内部的动画
import { navigation } from './utils';
import { TitleButton } from './components';
import { statusBarHeight } from './styles';

//containers
import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Page3 from './containers/Page3';
import Page4 from './containers/Page4';
import Page5 from './containers/Page5';

import back from './assets/icon-back.png';

const AppNavigator = StackNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  page1: {
    screen: Page1,
  },
  page2: {
    screen: Page2,
  },
  page3: {
    screen: Page3,
    navigationOptions: {
      title: 'Page3',
    },
  },
  page4: {
    screen: Page4,
  },
  page5: {
    screen: Page5,
  },
},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#51CEE0',
        ...Platform.select({
          android: {
            height: 44 + statusBarHeight,
            paddingTop: statusBarHeight,
          },
        }),
      },
      headerBackTitle: null,
      headerLeft: <TitleButton image={back} onPress={navigation.backAction} />,
      headerRight: <View />,
      headerTitleStyle: {
        alignSelf: 'center',
      },
      gesturesEnabled: false,
    },
    headerMode: 'screen',
    transitionConfig: () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })
  }
);

export default AppNavigator;
