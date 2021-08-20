import { Dispatch, SetStateAction } from 'react';
import { Product } from '../store/modules/products/types';

export interface AuthContextData {
  signed: boolean | undefined;
  login: () => Promise<any>;
  logout: () => Promise<any>;
}

export interface AppContextData {
  product: Product | undefined;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}
