import {StyleSheet, Text as NativeText, TextProps} from 'react-native';
import React from 'react';
import colors from '../config/colors';

const Text: React.FC<TextProps> = ({children, onPress, style}) => {
  return (
    <NativeText onPress={onPress} style={[styles.text, style]}>
      {children}
    </NativeText>
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {color: colors.text, fontWeight: '500', fontSize: 16},
});
