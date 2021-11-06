import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from '../constants';
import HomeNavigation from '../navigation/appNavigation/homeStack/index';
const MainStack = createStackNavigator();

export class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={routes.home}>
          <MainStack.Screen
            screenOptions={{headerShown: false}}
            name={routes.home}
            component={HomeNavigation}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}
