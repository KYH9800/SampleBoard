import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// styled-components
import { HomeWrapper, BoxWrapper, BottomBannerImg } from '../styles/pages/HomeSt';
import { BannerImg } from '../styles/components/Banners/BannerIndexTopSt';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// components
import BannerIndexTop from '../components/Banner/BannerIndexTop';
import FreeBoardBox from '../components/HomeBoardBox/FreeBoardBox';
import GalleryBoardBox from '../components/HomeBoardBox/GalleryBoardBox';
import YoutubeBoardBox from '../components/HomeBoardBox/YoutubeBoardBox';
import NoticeBoardBox from '../components/HomeBoardBox/NoticeBoardBox';
// custom hooks
import useInput from '../customHooks/useInput';
// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

/***********************************************
 * 각 페이지에 있는 검색창 위로 올리고 무한스크롤 기능 추가하기
 ***********************************************/

// 메인 페이지
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user); // me && me.user.user_id

  return (
    <AppLayout>
      <HomeWrapper>
        <BoxWrapper>
          <BannerIndexTop />
        </BoxWrapper>

        <BoxWrapper>
          <FreeBoardBox />
          <GalleryBoardBox />
        </BoxWrapper>

        <BoxWrapper>
          <YoutubeBoardBox />
          <NoticeBoardBox />
        </BoxWrapper>

        <div>
          <Link href="#">
            <BottomBannerImg src="/images/1672013915421-8igym60y0pc.png" />
          </Link>
        </div>
      </HomeWrapper>
    </AppLayout>
  );
};

// 내 정보 불러오기, Server Side Rendering
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
  axios.defaults.headers.Cookie = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
});

export default Home;
