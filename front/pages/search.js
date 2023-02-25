import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// 최근 게시글
const Search = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>검색결과 - 게시판 샘플</title>
      </Head>
      <h1>검색결과</h1>
    </AppLayout>
  );
};

export default Search;
