import {
  Dimensions,
  StyleSheet
} from 'react-native';

const window = Dimensions.get('window');


const width = window.width;
const height = window.height;

const color20 = '#202020';

const styles = StyleSheet.create({
  font1: {
    fontSize: 15,
    color: color20,
  }
});

export {
  width,
  height,
  color20,
};

export default styles;
