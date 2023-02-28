import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// AppLayout
import AppLayoutWithoutSide from '../components/AppLayout/AppLayoutWithoutSide';
// styled-components
import { Button } from '../styles/components/LoginBox/LoginBoxSt';
import {
  Article,
  TilteWord,
  Form,
  Input,
  KakaoLoginWrapper,
  KakaoLoginBtn,
  BottomButton,
} from '../styles/pages/LoginSt';

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
          <KakaoLoginWrapper>
            <KakaoLoginBtn src="/images/kakao_login_medium_wide.png" onClick={KakaoLoginClick} />
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

export default Login;
