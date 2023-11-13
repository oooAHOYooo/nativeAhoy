import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import or define your screens
import RadioScreen from './screens/RadioScreen';
import CableScreen from './screens/CableScreen';
import LibraryScreen from './screens/LibraryScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Radio') {
              iconName = focused ? 'radio' : 'radio-outline';
            } else if (route.name === 'Cable') {
              iconName = focused ? 'tv' : 'tv-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'library' : 'library-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Radio" component={RadioScreen} />
        <Tab.Screen name="Cable" component={CableScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
