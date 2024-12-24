import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  TrendingScreen,
} from '../screens';
import ImagePath from '../utils/ImagePath';
import {moderateScale} from '../utils/responsive';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const Icons = ({route, focused, color, size}) => {
  let iconName;
  if (route.name === 'Home') {
    iconName = focused ? ImagePath.HOME : ImagePath.HOME;
  } else if (route.name === 'Search') {
    iconName = focused ? ImagePath.SEARCH : ImagePath.SEARCH;
  } else if (route.name === 'Trending') {
    iconName = focused ? ImagePath.TRENDING : ImagePath.TRENDING;
  } else {
    iconName = focused ? ImagePath.PROFILE : ImagePath.PROFILE;
  }
  return (
    <Image
      source={iconName}
      resizeMode="contain"
      style={{
        height: moderateScale(24),
        width: moderateScale(24),
        tintColor: focused ? color : colors.darkGray,
      }}
    />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          Icons({route, focused, color, size}),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarActiveTintColor: colors.neonCyan_60,
        tabBarInactiveTintColor: colors.darkGray_80,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} options={{}} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
