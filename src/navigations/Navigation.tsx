import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import type { RootStackParamList } from '../utils/types/Navigations';
import HomeScreen from '../screens/home/HomeScreen';
import HeaderNavigation from '../components/header/HeaderNavigation';

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          header: (props) => <HeaderNavigation {...props} />
        }}
      >
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}


export default Navigation;
