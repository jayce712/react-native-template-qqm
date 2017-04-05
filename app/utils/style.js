import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');
const width = window.width;
const height = window.height;


const style = StyleSheet.create({
  font1: {
    fontSize: 15,
    color: '#3C4455'
  }
});

export {
  width,
  height
};

export default style;
