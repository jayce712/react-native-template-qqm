import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { navigation } from '../utils';
import { Button } from '../components';

class Page4 extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>this is page 4</Text>
        <Button title={'set params to change title'} onPress={() => { navigation.setParams({ title: '页面4' }) }} />
        <Button title={'push page5'} onPress={() => { navigation.push('page5') }} />
      </View>
    );
  }
}

Page4.navigationOptions = ({ navigation: nav }) => {
  let title;
  if (nav.state.params && nav.state.params.title) {
    title = nav.state.params.title;
  } else {
    title = 'Page4'
  }
  return {
    title: title,
  };
};

export default Page4;