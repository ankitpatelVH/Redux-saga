import {takeEvery, all, call, put} from 'redux-saga/effects';
import ScreenName from '../../../Utils/ScreenName';
import {login} from '../../SagaService/LoginService';
import * as NavigationService from '../../SagaService/NavigationService';
import {sucessCall} from './Action';
import Type from './Type';

export function* getLogin({payload}) {
  try {
    const data = yield call(login, payload);

    if (data) {
      yield put(sucessCall(data));
      NavigationService.navigate(ScreenName.HOME_SCREEN);
    }
  } catch (e) {
    console.log('error saga', e);
  }
}

export function* getLoginFlow() {
  yield takeEvery(Type.FETCH_LOGIN, getLogin);
}

export default function* userSagas() {
  yield all([getLoginFlow()]);
}
