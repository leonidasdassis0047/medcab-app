import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

const RowContainer: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 'auto',
  },
});
