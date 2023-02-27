import React from 'react';
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
import { HomeItemBox, BoxHeader, TextBox } from '../../styles/pages/HomeSt';
// components
import TextEntry from './TextEntry';

// mockData
import { notice_fake_data } from '../../MockDatas/MockData';

// 공지사항
const NoticeBoardBox = () => {
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
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
        <TextEntry data={notice_fake_data} />
      </TextBox>
    </HomeItemBox>
  );
};

export default NoticeBoardBox;
