// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VehicleSelectionScreen from '../screens/VehicleSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';
import DrivingLicenseScreen from '../screens/DrivingLicenseScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import ModeScreen from '../screens/ModeScreen';
import JobsScreen from '../screens/JobsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={ModeScreen} />
    <Tab.Screen name="Jobs" component={JobsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="VehicleSelection">
      <Stack.Screen name="VehicleSelection" component={VehicleSelectionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="DrivingLicense" component={DrivingLicenseScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
