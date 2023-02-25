import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 최근 게시글
const New = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>최근 게시글 - 게시판 샘플</title>
      </Head>
      <h1>최근 게시글</h1>
    </AppLayout>
  );
};

export default New;
