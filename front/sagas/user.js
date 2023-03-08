import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../reducers/user';

function loginAPI(data) {
  return axios.post('user/login', data);
}

function* login(action) {
  try {
    // api 통신할때는 call
    const result = yield call(loginAPI, action.data);
    console.log('user-saga-login-result: ', result);
    // yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
