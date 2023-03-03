import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// AppLayout
import AppLayoutWithoutSide from '../components/AppLayout/AppLayoutWithoutSide';
// styled-components
import { Button } from '../styles/components/LoginBox/LoginBoxSt';
import { Article, SignupTilteWord, Form, Input, KakaoLoginWrapper, BottomButton } from '../styles/pages/LoginSt';

// 회원가입
const Signup = () => {
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
        <title>회원가입 - 게시판 샘플</title>
      </Head>

      <Article>
        <SignupTilteWord>회원가입</SignupTilteWord>

        <Form onSubmit={onClickSubmit}>
          <Input type="email" placeholder="아이디 또는 이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="password" placeholder="비밀번호 확인" />
          <Input type="text" placeholder="이름" />
          <Input type="text" placeholder="닉네임" />
          <Input type="tel" placeholder="전화번호" />
          <Input type="text" placeholder="주소" />
          <Button>회원가입</Button>
        </Form>

        <div />
        <div />

        <BottomButton>
          이미 가입된 회원이라면?
          <Link href="/login">로그인</Link>
        </BottomButton>

        <KakaoLoginWrapper onClick={KakaoLoginClick}>
          <img src="/images/kakao_logo.svg" />
          <p>카카오로 바로 시작하기</p>
        </KakaoLoginWrapper>
      </Article>
    </AppLayoutWithoutSide>
  );
};

export default Signup;
