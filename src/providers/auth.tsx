import React, { createContext, useEffect, useState } from 'react';
import AsyncStore from '@react-native-async-storage/async-storage';

import { AuthContextData } from '../@types/data';
import { Constants } from '../utils/Constants';

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState<boolean>();

  useEffect(() => {
    const getToken = async () => {
      const data = await AsyncStore.getItem(Constants.token);

      if (data) {
        setSigned(true);
      } else {
        setSigned(false);
      }
    };

    getToken();
  }, []);

  const login = async () => {
    return new Promise(res => {
      setTimeout(async () => {
        await AsyncStore.setItem(
          Constants.token,
          JSON.stringify({
            token:
              'eb5daodhahdiahdiahd9adha9ad.dahdaidiadhiahdiad8adadadi.da9da9d9a7d9ad79ad9ad79ad.dad9ad79ad79ad9',
          }),
        );

        setSigned(true);
        return res(true);
      }, 1000);
    });
  };

  const logout = async () => {
    await AsyncStore.removeItem(Constants.token);
    setSigned(false);
  };

  return (
    <AuthContext.Provider value={{ signed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
