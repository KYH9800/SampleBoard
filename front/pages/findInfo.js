import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 비밀번호 찾기
const FindInfo = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>비밀번호 찾기 - 게시판 샘플</title>
      </Head>
      <h1>비밀번호 찾기</h1>
    </AppLayout>
  );
};

export default FindInfo;
