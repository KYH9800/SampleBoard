import React from 'react';
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
import { HomeItemBox, BoxHeader, ImageBox } from '../../styles/pages/HomeSt';
// components
import ImageEntry from './ImageEntry';

// mockData
import { youtube_card_fake_data } from '../../MockDatas/MockData';

// 유튜브
const YoutubeBoardBox = () => {
  return (
    <HomeItemBox>
      <BoxHeader>
        <h3>
          <Link href="youtube">유튜브</Link>
        </h3>
        <div>
          <Link href="youtube">더보기</Link>
        </div>
      </BoxHeader>

      <ImageBox>
        {youtube_card_fake_data.slice(0, 6).map((data, idx) => {
          return <ImageEntry key={idx} data={data} />;
        })}
      </ImageBox>
    </HomeItemBox>
  );
};

export default YoutubeBoardBox;
