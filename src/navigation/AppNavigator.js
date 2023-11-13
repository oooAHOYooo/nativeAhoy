import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import logo from '../assets/logo.png'; // replace this with the path to your logo

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image 
              source={logo} 
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }} 
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
}

export default AppNavigator;