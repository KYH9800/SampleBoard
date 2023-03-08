import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE } from '../reducers/post';

function loadUserPostsAPI(data, lastId) {
  return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`); // 10 불러오고 없으면 0
}

function* loadUserPosts(action) {
  console.log('이거 확인해봐: ', action.data, action.lastId);
  try {
    const result = yield call(loadUserPostsAPI, action.data, action.lastId);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts); // n초 동안은 한번만 요청이 간다 (throttle)
}

export default function* postSaga() {
  yield all([fork(watchLoadUserPosts)]);
}
