import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routes, headers} from '../../../constants';
import BottomTab from '../bottomTab';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={headers.screenOptions}
      initialRouteName={routes.homeLanding}>
      <HomeStack.Screen
        name={routes.homeLanding}
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
