import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Animated, {AnimateStyle} from 'react-native-reanimated';

type MainLayoutProps = {
  drawerAnimationStyles?: AnimateStyle<ViewStyle>;
};

const MainLayout: React.FC<MainLayoutProps> = ({drawerAnimationStyles}) => {
  return (
    <Animated.View style={[styles.screenContainer, drawerAnimationStyles]}>
      <Text>Header Component</Text>
      <Text>Main Component</Text>
      <Text>Footer Component</Text>
    </Animated.View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
