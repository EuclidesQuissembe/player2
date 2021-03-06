import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useAuth from '../hooks/useAuth';

import Tabs from './tabs';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import ProductDetailt from '../screens/ProductDetail';
import OrderAccess from '../screens/OrderAccess';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { signed } = useAuth();

  return (
    <Stack.Navigator initialRouteName="Login">
      {!signed ? (
        <>
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
        </>
      ) : (
        <>
          <Stack.Screen
            name="First"
            component={Tabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailt}
            options={{
              title: '',
            }}
          />

          <Stack.Screen
            name="OrderAccess"
            component={OrderAccess}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
