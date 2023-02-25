import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 자유게시판
const Youtube = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>유튜브 - 게시판 샘플</title>
      </Head>
      <h1>Youtube</h1>
    </AppLayout>
  );
};

export default Youtube;
