import {
  Dimensions,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

const window = Dimensions.get('window');

//size
const width = window.width;
const height = window.height;
const statusBarHeight = Platform.OS === 'ios' ? 20 : Platform.Version > 19 ? StatusBar.currentHeight : 0;

//color
const fontColor = '#3C4455';
const blue = '#0000FF';

//styles
const styles = StyleSheet.create({
  fontTheme: {
    fontSize: 15,
    color: fontColor,
  }
});

export {
  width,
  height,
  statusBarHeight,
  fontColor,
  blue,
};

export default styles;
