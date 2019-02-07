import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from './../actionTypes';

import { initGnomesSaga } from './gnomes';

export function* watchGnomes() {
  yield takeEvery(actionTypes.INIT_GNOMES, initGnomesSaga);
}
