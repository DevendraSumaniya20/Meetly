import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigation/StackNavigator';
import TabNavigator from './TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './StackNavigation/MainStack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
