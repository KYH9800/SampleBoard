import React from 'react';
import Link from 'next/link';
// styled-components
import { HomeItemBox, BoxHeader, ImageBox } from '../../styles/pages/HomeSt';
// components
import ImageEntry from './ImageEntry';

// mockData
import { gallery_card_fake_data } from '../../MockDatas/MockData';

// 갤러리
const GalleryBoardBox = () => {
  return (
    <HomeItemBox>
      <BoxHeader>
        <h3>
          <Link href="gallery">갤러리</Link>
        </h3>
        <div>
          <Link href="gallery">더보기</Link>
        </div>
      </BoxHeader>

      <ImageBox>
        {gallery_card_fake_data.slice(0, 6).map((data, idx) => {
          return <ImageEntry key={idx} data={data} />;
        })}
      </ImageBox>
    </HomeItemBox>
  );
};

export default GalleryBoardBox;
