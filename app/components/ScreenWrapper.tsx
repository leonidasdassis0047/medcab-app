import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';

type ScreenWrapperProps = {
  children: React.ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
};
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  containerStyles,
  children,
}) => {
  return <View style={[styles.container, containerStyles]}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 2,
  },
});
