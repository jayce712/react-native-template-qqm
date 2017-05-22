import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import { navigation } from '@app/utils';

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title={'push page1'} onPress={() => { navigation.push('page1') }} />
        <Button title={'push page2'} onPress={() => { navigation.push('page2') }} />
        <Button title={'push page3'} onPress={() => { navigation.push('page3') }} />
        <Button title={'push page4'} onPress={() => { navigation.push('page4') }} />
        <Button title={'push page5'} onPress={() => { navigation.push('page5') }} />
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
