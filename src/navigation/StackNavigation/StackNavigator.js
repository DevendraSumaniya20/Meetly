import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfileScreen} from '../../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Tab" component={TabNavigator} /> */}

      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
