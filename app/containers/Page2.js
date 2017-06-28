import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { navigation } from '../utils';
import { Button } from '../components';

class Page2 extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>this is page 2</Text>
        <Button title={'push page3'} onPress={() => { navigation.push('page3') }} />
      </View>
    );
  }
}

Page2.navigationOptions = {
  title: 'Page2',
};

export default Page2;
