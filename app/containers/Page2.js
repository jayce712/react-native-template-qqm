import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { navigation } from '@app/utils';

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
