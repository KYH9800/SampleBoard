import React from 'react';
import Link from 'next/link';
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

/***********************************************
 * 각 페이지에 있는 검색창 위로 올리고 무한스크롤 기능 추가하기
 ***********************************************/

// 메인 페이지
const Home = () => {
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

export default Home;
