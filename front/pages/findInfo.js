import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayoutWithoutSide from '../components/AppLayout/AppLayoutWithoutSide';
// styled-components
import { Button } from '../styles/components/LoginBox/LoginBoxSt';
import { Article, TilteWord, Form, Input } from '../styles/pages/LoginSt';

// 비밀번호 찾기
const FindInfo = () => {
  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit Search');
  };

  return (
    <AppLayoutWithoutSide>
      <Head>
        <meta charSet="utf-8" />
        <title>비밀번호 찾기 - 게시판 샘플</title>
      </Head>

      <Article>
        <TilteWord>비밀번호 찾기</TilteWord>

        <Form onSubmit={onClickSubmit}>
          <Input type="email" placeholder="이메일" />
          <Button>비밀번호 찾기</Button>
        </Form>
      </Article>
    </AppLayoutWithoutSide>
  );
};

export default FindInfo;
