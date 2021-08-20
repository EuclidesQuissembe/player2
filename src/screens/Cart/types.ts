import { CartState } from '../../store/modules/carts/types';

export interface DispatchProps {
  loadRequest: () => void;
}

export interface StateProps {
  data: CartState;
}

export type Props = DispatchProps & StateProps;
