import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { navigation } from '../utils';
import { Button } from '../components';

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
