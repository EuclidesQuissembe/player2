import produce from 'immer';
import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';

const INITIAL_STATE: CartState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.LOAD_REQUEST:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case CartTypes.LOAD_SUCCESS:
      return {
        data: action.payload.products,
        loading: true,
        error: false,
      };
    case CartTypes.ADD_TO_CART:
      return produce(state, draft => {
        const productIndex = draft.data.findIndex(
          p => p.title === action.payload.product.title,
        );

        if (productIndex >= 0) {
          draft.data[productIndex].amount += 1;
        } else {
          draft.data.push({
            ...action.payload.product,
            amount: action.payload.amount,
          });
        }
      });
    case CartTypes.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.data.findIndex(
          p => p.title === action.payload.productTitle,
        );

        if (productIndex >= 0) {
          draft.data[productIndex].amount -= 1;
        }
      });
    case CartTypes.DELETE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.data.findIndex(
          p => p.title === action.payload.productTitle,
        );

        if (productIndex >= 0) {
          draft.data.splice(productIndex, 1);
        }
      });
    case CartTypes.LOAD_FAILURE:
      return {
        data: [],
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
