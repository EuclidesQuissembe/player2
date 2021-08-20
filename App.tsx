import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import { AppProvider } from './src/providers/app';

import Routes from './src/routes';
import store from './src/store';

import lightTheme from './src/styles/themes/light';
import { AuthProvider } from './src/providers/auth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
