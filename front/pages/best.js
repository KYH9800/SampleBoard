import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 최근 게시글
const Best = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>인기 게시글 - 게시판 샘플</title>
      </Head>
      <h1>인기 게시글</h1>
    </AppLayout>
  );
};

export default Best;
