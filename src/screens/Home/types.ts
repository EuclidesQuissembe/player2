import { ProductsState } from '../../store/modules/products/types';

export interface StateProps {
  data: ProductsState;
}

export interface DispatchProps {
  loadRequest: () => void;
}

export type Props = StateProps & DispatchProps;
