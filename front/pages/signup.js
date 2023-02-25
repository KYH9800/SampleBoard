import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 회원가입
const Signup = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>회원가입 - 게시판 샘플</title>
      </Head>
      <h1>회원가입</h1>
    </AppLayout>
  );
};

export default Signup;
