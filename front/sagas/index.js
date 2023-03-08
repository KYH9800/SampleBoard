import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import postSaga from './post';
import { backURL } from '../config/config';

axios.defaults.baseURL = backURL;
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
