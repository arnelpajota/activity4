import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import Home from './screens/screen1';
import About from './screens/screen2';
import Profile from './screens/screen3';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home"
  activeColor="#a37930"
  inactiveColor="grey"
  barStyle={{ backgroundColor: '#232d3f' }}>
    <Tab.Screen 
    name="Home" 
    component={Home} 
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    }}
    />
    <Tab.Screen
     name="About" 
     component={About}
     options={{
      tabBarLabel: 'Map',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="map" color={color} size={26} />
      ),
    }}
     />
    <Tab.Screen
     name="Profile" 
     component={Profile}
     options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
      ),
    }}
     />
  </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
