import { put, call, takeEvery } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadFailure, loadSuccess } from './actions';
import { ProductTypes } from './types';

function* load(): any {
  try {
    const data = yield call(api.get, '/products');

    yield put(loadSuccess(data.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeEvery(ProductTypes.LOAD_REQUEST, load);
