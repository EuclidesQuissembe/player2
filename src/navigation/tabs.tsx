import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

const navigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <MaterialIcons name="store" size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <MaterialIcons name="search" size={24} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          headerShown: true,
          title: 'My Cart',
          tabBarIcon: () => <MaterialIcons name="shopping-cart" size={24} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => <MaterialIcons name="person" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default navigation;
