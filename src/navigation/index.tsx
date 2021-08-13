import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./tabs";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="First"
        component={Tabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
