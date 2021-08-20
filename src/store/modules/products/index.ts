import { Reducer } from 'redux';
import { ProductsState, ProductTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, acttion) => {
  switch (acttion.type) {
    case ProductTypes.LOAD_REQUEST:
      return {
        loading: true,
        error: false,
        data: [],
      };
    case ProductTypes.LOAD_SUCCESS:
      return {
        loading: false,
        error: false,
        data: acttion.payload.products,
      };
    case ProductTypes.LOAD_FAILURE:
      return {
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
