import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';
import { navigation } from '@app/utils';
import { Button } from '@app/components';

class Page5 extends Component {

  componentDidMount() {
    navigation.backHandle(() => { navigation.popTo('home'); });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>onpress android back button will popTo home</Text>
        <Button title={'pop 1 page'} onPress={() => { navigation.pop(1) }} />
        <Button title={'pop 2 page'} onPress={() => { navigation.pop(2) }} />
        <Button title={'pop 3 page'} onPress={() => { navigation.pop(3) }} />
        <Button title={'pop 4 page'} onPress={() => { navigation.pop(4) }} />
        <Button title={'pop to home'} onPress={() => { navigation.popTo('home') }} />
        <Button title={'reset stack[0] to home'} onPress={() => { navigation.reset('home') }} />
      </View>
    );
  }
}

Page5.navigationOptions = {
  title: 'Page5',
};

export default Page5;