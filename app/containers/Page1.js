import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { navigation } from '../utils';
import { Button } from '../components';

class Page1 extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>this is page 1</Text>
        <Button title={'push page2'} onPress={() => { navigation.push('page2') }} />
      </View>
    );
  }
}

Page1.navigationOptions = {
  title: 'Page1',
};

export default Page1;
