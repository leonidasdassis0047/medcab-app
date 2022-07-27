import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './app/store';
import AppDrawer from './app/navigation/AppDrawer';
import {StatusBar} from 'react-native';
import colors from './app/config/colors';
import {MedicineDetails, Notification} from './app/screens';

const RootStack = createNativeStackNavigator();

const App = () => {
  return <MedicineDetails />;
  // return (
  //   <React.Fragment>
  //     <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
  //     <NavigationContainer>
  //       <Provider store={store}>
  //         <RootStack.Navigator screenOptions={{headerShown: false}}>
  //           <RootStack.Screen name="AppDrawer" component={AppDrawer} />
  //         </RootStack.Navigator>
  //       </Provider>
  //     </NavigationContainer>
  //   </React.Fragment>
  // );
};

export default App;
