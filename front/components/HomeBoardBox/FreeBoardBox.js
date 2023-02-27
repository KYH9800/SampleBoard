import React from 'react';
import Link from 'next/link';
// styled-components
import { HomeItemBox, BoxHeader, TextBox } from '../../styles/pages/HomeSt';
// components
import TextEntry from './TextEntry';

// 자유게시판
const FreeBoardBox = () => {
  const fake_data = {
    content: '자유게시판 글을 보여줍니다.',
  };

  return (
    <HomeItemBox>
      <BoxHeader>
        <h3>
          <Link href="free">자유게시판</Link>
        </h3>
        <div>
          <Link href="free">더보기</Link>
        </div>
      </BoxHeader>

      <TextBox>
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
        <TextEntry data={fake_data} />
      </TextBox>
    </HomeItemBox>
  );
};

export default FreeBoardBox;
