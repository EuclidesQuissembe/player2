import React, { createContext, useState } from 'react';
import { AppContextData } from '../@types/data';
import { Product } from '../store/modules/products/types';

export const AppContext = createContext({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [product, setProduct] = useState<Product>();

  return (
    <AppContext.Provider value={{ product, setProduct }}>
      {children}
    </AppContext.Provider>
  );
};
