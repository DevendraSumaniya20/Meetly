import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './StackNavigation/MainStack';
import {SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{animation: 'fade', animationDuration: 800}}
        />
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
