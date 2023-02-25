import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// global.css
import '../styles/global.css';

const SampleBoard = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>게시판 샘플</title>
    </Head>
    <Component {...pageProps} />
  </>
);

SampleBoard.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default SampleBoard;
