import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// redux
import wrapper from '../store/configureStore';
// global.css
import '../styles/globalCSS/global.css';

const SampleBoard = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>게시판 샘플사이트</title>
    </Head>

    <Component {...pageProps} />
  </>
);

SampleBoard.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default wrapper.withRedux(SampleBoard);
