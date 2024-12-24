import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthNavigator} />

      <Stack.Screen name="Stack" component={StackNavigator} />
    </Stack.Navigator>
  );
};

export default MainStack;
