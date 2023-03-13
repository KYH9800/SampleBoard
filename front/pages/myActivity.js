import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// styled-components
import styled from 'styled-components';
// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

// 마이페이지
const MyActivity = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  console.log('me: ', me);

  useEffect(() => {
    if (!me) {
      Router.replace('/'); // 페이지가 없어짐
    }
  }, [me]);

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>나의활동 - 게시판 샘플</title>
      </Head>

      <h3>나의 활동</h3>
      <h3>나의 게시글</h3>
      <div>{me?.user.Posts.length}개의 게시글</div>
      <h3>나의 댓글</h3>
      <div>{me?.user.Posts.length}개의 댓글</div>
      <h3>나의 스크랩</h3>
      <div>{me?.user.Posts.length}개의 스크랩</div>
    </AppLayout>
  );
};

// 내 정보 불러오기, Server Side Rendering
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
  axios.defaults.headers.Cookie = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
});

export default MyActivity;
