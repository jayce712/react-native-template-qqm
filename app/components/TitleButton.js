import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import appStyles from '../styles';

const TitleButton = ({ style, onPress, text, textStyle, image, imageStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ paddingHorizontal: 12, width: 80, paddingVertical: 5, }, style]} hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }} activeOpacity={0.6}>
      {image ? <Image source={image} style={imageStyle} /> : null}
      {text ? <Text style={[appStyles.fontTheme, textStyle]}>{text}</Text > : null}
    </TouchableOpacity >
  );
};

export default TitleButton;
