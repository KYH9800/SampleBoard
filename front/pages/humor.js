import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 유머게시판
const Humor = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>유머게시판 - 게시판 샘플</title>
      </Head>
      <h1>유머게시판</h1>
    </AppLayout>
  );
};

export default Humor;
