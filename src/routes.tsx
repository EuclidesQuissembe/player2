import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./navigation";

export default function RoutesContainer() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
