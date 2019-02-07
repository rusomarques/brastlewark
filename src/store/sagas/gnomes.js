import { put } from 'redux-saga/effects';
import * as actions from './../actions';

export function* initGnomesSaga(action) {
  const response = yield fetch(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  );
  const data = yield response.json();
  yield put(actions.setGnomes(data.Brastlewark));
}
