import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 갤러리
const Gallery = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>갤러리 - 게시판 샘플</title>
      </Head>
      <h1>갤러리</h1>
    </AppLayout>
  );
};

export default Gallery;
