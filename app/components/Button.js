import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { blue } from '../styles';

function convertToRGBA(color, opacity) {
  let result = '';
  if (color.indexOf('#') === 0) {
    let _color = color.replace('#', '');
    const r = parseInt(_color.substring(0, 2), 16);
    const g = parseInt(_color.substring(2, 4), 16);
    const b = parseInt(_color.substring(4, 6), 16);
    result = `rgba(${r},${g},${b},${opacity})`;
  } else if (color.indexOf('rgb') === 0 && color.indexOf('rgba') === -1) {
    result = `rgba${color.slice(3, -1)},${opacity})`;
  } else if (color.indexOf('rgba') === 0) {
    const index = color.lastIndexOf(',');
    result = `${color.slice(0, index)},${opacity})`;
  }
  return result;
}

const Button = ({ onPress, title, disabled, color = blue, style, titleStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: disabled ? convertToRGBA(color, 0.6) : color }, style]} disabled={disabled} activeOpacity={0.6}>
      <Text style={[styles.text, { color: disabled ? 'rgba(255,255,255,0.6)' : '#FFFFFF' }, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  }
});

export default Button;
