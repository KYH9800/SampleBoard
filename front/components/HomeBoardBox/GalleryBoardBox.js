import React from 'react';
import Link from 'next/link';
// styled-components
import { HomeItemBox, BoxHeader, ImageBox } from '../../styles/pages/HomeSt';
// components
import ImageEntry from './ImageEntry';

// 갤러리
const GalleryBoardBox = () => {
  const fake_data = {
    src: '/images/1672023331502-3o43kwpfrii.jpg',
    content: '재택근무 데스크 ...',
  };

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

export default GalleryBoardBox;
