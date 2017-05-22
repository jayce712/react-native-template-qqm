import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { navigation } from '@app/utils';

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
