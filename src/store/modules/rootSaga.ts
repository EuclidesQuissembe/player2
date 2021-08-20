import { all } from 'redux-saga/effects';

import product from './products/sagas';

export default function* rootSaga(): any {
  return yield all([product]);
}
