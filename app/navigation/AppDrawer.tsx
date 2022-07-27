import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import colors from '../config/colors';
import AppLayout from './AppLayout';
import {ScreenWrapper} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Divider from '../components/ContentDivider';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={styles.drawerContentScrollStyles}>
      <Ionicons
        name="ios-close"
        size={28}
        color={colors.white}
        onPress={() => navigation?.closeDrawer()}
      />
      <Divider />
    </DrawerContentScrollView>
  );
};

const AppDrawer = () => {
  // const [progress, setProgress] = useState(new Animated.Value(0));
  // const scale = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const borderRadius = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 24],
  // });
  // const drawerAnimationStyles = {borderRadius, transform: [{scale}]};
  // const aStyles = useAnimatedStyle(() => {
  //   return {
  //     borderRadius: Animated.interpolateNode(progress, {
  //       inputRange: [0, 1],
  //       outputRange: [0, 24],
  //     }),
  //     scale: Animated.interpolateNode(progress, {
  //       inputRange: [0, 1],
  //       outputRange: [1, 0.8],
  //     }),
  //   };
  // });

  return (
    <ScreenWrapper containerStyles={styles.screen}>
      <Drawer.Navigator
        drawerContent={props => {
          // setTimeout(() => {
          //   setProgress(props.progress);
          // }, 0);

          return <CustomDrawerContent {...props} />;
        }}
        screenOptions={{
          drawerStyle: {
            flex: 1,
            width: '64%',
            backgroundColor: 'transparent',
            paddingRight: 12,
          },
          overlayColor: 'transparent',
          drawerType: 'slide',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: false,
        }}
        initialRouteName="MainLayout">
        <Drawer.Screen name="MainLayout">
          {props => <AppLayout />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </ScreenWrapper>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    paddingHorizontal: 0,
  },
  drawerContentScrollStyles: {flex: 1, paddingLeft: 4},
});
