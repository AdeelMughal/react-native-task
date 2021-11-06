import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {width} from 'react-native-dimension';
import {colors} from '../../../utilities/colors/index';
import * as Home from '../../../../screens/mainFlow';
import {CustomIcon, CustomIconBadge} from '../../../../components';
import {appImages} from '../../../utilities';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.gradient1,
        inactiveTintColor: colors.frost,
        showLabel: true,
        tabStyle: {
          padding: width(1),
          backgroundColor: colors.snow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home.Home}
        options={{
          tabBarIcon: ({color}) => (
            <CustomIcon
              icon={appImages.navHome}
              size={width(6)}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Home.Cart}
        options={{
          tabBarIcon: ({color}) => (
            <CustomIconBadge
              icon={appImages.navCart}
              size={width(6)}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
