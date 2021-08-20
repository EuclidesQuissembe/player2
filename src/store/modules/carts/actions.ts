import { action } from 'typesafe-actions';
import { Product } from '../products/types';
import { Cart, CartTypes } from './types';

export const loadRequest = () => action(CartTypes.LOAD_REQUEST);

export const loadSuccess = (products: Cart[]) =>
  action(CartTypes.LOAD_SUCCESS, { products });

export const loadFailure = () => action(CartTypes.LOAD_FAILURE);

export const addToCart = (product: Product, amount: number) =>
  action(CartTypes.ADD_TO_CART, { product, amount });

export const removeFromCart = (productTitle: string) =>
  action(CartTypes.REMOVE_FROM_CART, { productTitle });

export const deleteFromCart = (productTitle: string) =>
  action(CartTypes.DELETE_FROM_CART, { productTitle });

export const deleteAll = () => action(CartTypes.DELETE_ALL);
