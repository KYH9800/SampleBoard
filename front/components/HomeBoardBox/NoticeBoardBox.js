import React from 'react';
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
import { HomeItemBox, BoxHeader, TextBox } from '../../styles/pages/HomeSt';
// components
import TextEntry from './TextEntry';

// 공지사항
const NoticeBoardBox = () => {
  const fake_data = {
    content: '공지사항 글을 보여줍니다.',
  };

  return (
    <HomeItemBox>
      <BoxHeader>
        <h3>
          <Link href="notice">공지사항</Link>
        </h3>
        <div>
          <Link href="notice">더보기</Link>
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

export default NoticeBoardBox;
