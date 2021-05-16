import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../Screen/HomeScreen/HomeScreen';
import LoginScreen from '../../Screen/LoginScreen/LoginScreen';
import ScreenName from '../../Utils/ScreenName';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;
