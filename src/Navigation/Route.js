import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './StackNavigation/MainStack';
import {navigationRef} from '../Services/SagaService/NavigationService';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Route;
