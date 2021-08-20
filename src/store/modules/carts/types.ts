import { Product } from '../products/types';

export enum CartTypes {
  LOAD_REQUEST = '@cart/LOAD_REQUEST',
  LOAD_SUCCESS = '@cart/LOAD_SUCCESS',
  LOAD_FAILURE = '@cart/LOAD_FAILURE',
  ADD_TO_CART = '@cart/ADD_TO_CART',
  REMOVE_FROM_CART = '@cart/REMOVE_FROM_CART',
  DELETE_FROM_CART = '@cart/DELETE_FROM_CART',
}

export interface Cart extends Product {
  amount: number;
}

export interface CartState {
  readonly data: Cart[];
  readonly loading: boolean;
  readonly error: boolean;
}
