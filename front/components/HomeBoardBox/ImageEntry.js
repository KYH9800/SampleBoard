import React from 'react';
import Link from 'next/link';
// styled-components
import { ImageEntryBoxWrapper, CustomImage, CustomLink } from '../../styles/components/HomeBoardBox/ImageEntrySt';

const ImageEntry = ({ data }) => {
  return (
    <ImageEntryBoxWrapper>
      <div>
        <Link href={`/${data.category}/${data.id}`}>
          <CustomImage src={data.src} alt="이미지" />
        </Link>
      </div>
      <div>
        <CustomLink href="#">{data.title?.length > 7 ? data.title.substr(0, 7) + '...' : data.title}</CustomLink>
      </div>
    </ImageEntryBoxWrapper>
  );
};

export default ImageEntry;
