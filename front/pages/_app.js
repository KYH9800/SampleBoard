import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// global.css
import '../styles/global.css';

const WaffleBoard = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>와플보드 샘플</title>
    </Head>
    <Component {...pageProps} />
  </>
);

WaffleBoard.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default WaffleBoard;
