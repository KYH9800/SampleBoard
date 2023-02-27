import React from 'react';
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
import { HomeItemBox, BoxHeader, ImageBox } from '../../styles/pages/HomeSt';
// components
import ImageEntry from './ImageEntry';

// 유튜브
const YoutubeBoardBox = () => {
  const fake_data = {
    src: '/images/hqdefault.jpg',
    content: `TAEYEON 태연 '...`,
  };

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
        <ImageEntry data={fake_data} />
        <ImageEntry data={fake_data} />
        <ImageEntry data={fake_data} />
        <ImageEntry data={fake_data} />
        <ImageEntry data={fake_data} />
        <ImageEntry data={fake_data} />
      </ImageBox>
    </HomeItemBox>
  );
};

export default YoutubeBoardBox;
