import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 공지사항
const Notice = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>공지사항 - 게시판 샘플</title>
      </Head>
      <h1>공지사항</h1>
    </AppLayout>
  );
};

export default Notice;
