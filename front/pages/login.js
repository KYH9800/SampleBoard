import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// AppLayout
import AppLayoutWithoutSide from '../components/AppLayout/AppLayoutWithoutSide';
// styled-components
import { Button } from '../styles/components/LoginBox/LoginBoxSt';
import { Article, TilteWord, Form, Input, KakaoLoginWrapper, BottomButton } from '../styles/pages/LoginSt';
// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_REQUEST, LOGIN_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

// 회원가입
const Login = () => {
  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit Search');
  };

  const KakaoLoginClick = () => {
    console.log('test');
  };

  return (
    <AppLayoutWithoutSide>
      <Head>
        <meta charSet="utf-8" />
        <title>로그인 - 게시판 샘플</title>
      </Head>

      <Article>
        <TilteWord>로그인</TilteWord>

        <Form onSubmit={onClickSubmit}>
          <Input type="email" placeholder="아이디 또는 이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button>로그인</Button>
          <KakaoLoginWrapper onClick={KakaoLoginClick}>
            <img src="/images/kakao_logo.svg" />
            <p>카카오로 바로 시작하기</p>
          </KakaoLoginWrapper>
        </Form>

        <div />

        <BottomButton>
          아직 회원이 아니라면?
          <Link href="/signup">회원가입</Link>
        </BottomButton>
        <BottomButton>
          <Link href="/findInfo">아이디·비밀번호 찾기</Link>
        </BottomButton>
      </Article>
    </AppLayoutWithoutSide>
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

export default Login;
