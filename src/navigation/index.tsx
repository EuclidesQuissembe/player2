import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './tabs';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import ProductDetailt from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="First">
      <Stack.Screen
        name="First"
        component={Tabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailt}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
}
