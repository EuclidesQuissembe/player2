import React from "react";
import { ThemeProvider } from "styled-components/native";

import Routes from "./src/routes";

import lightTheme from "./src/styles/themes/light";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
