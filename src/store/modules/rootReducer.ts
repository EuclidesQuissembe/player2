import { combineReducers } from 'redux';

import products from './products';
import cart from './carts';

export default combineReducers({
  products,
  cart,
});
