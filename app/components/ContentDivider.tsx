import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../config/colors';

const ContentDivider: React.FC<{style?: StyleProp<ViewStyle>}> = ({style}) => {
  return <View style={[styles.container, style]} />;
};

export default ContentDivider;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 2,
    backgroundColor: '#EEE',
    marginVertical: 2,
  },
});
