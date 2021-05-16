import {all} from 'redux-saga/effects';
import userSagas from './UserDetails/Saga';

export default function* rootSaga() {
  yield all([userSagas()]);
}
