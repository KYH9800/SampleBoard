import React from 'react';
import Link from 'next/link';
// styled-components
import { ImageEntryBoxWrapper, CustomImage, CustomLink } from '../../styles/components/HomeBoardBox/ImageEntrySt';

const ImageEntry = ({ data }) => {
  return (
    <ImageEntryBoxWrapper>
      <div>
        <Link href="#">
          <CustomImage src={data.src} alt="이미지" />
        </Link>
      </div>
      <div>
        <CustomLink href="#">{data.content}</CustomLink>
      </div>
    </ImageEntryBoxWrapper>
  );
};

export default ImageEntry;
