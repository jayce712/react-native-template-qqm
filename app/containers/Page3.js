import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { navigation } from '@app/utils';

class Page3 extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>this is page 3</Text>
        <Button title={'push page4'} onPress={() => { navigation.push('page4') }} />
      </View>
    );
  }
}

export default Page3;
