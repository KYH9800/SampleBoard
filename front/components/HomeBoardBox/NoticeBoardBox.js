import React from 'react';
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
import { HomeItemBox, BoxHeader, TextBox } from '../../styles/pages/HomeSt';
// components
import TextEntry from './TextEntry';

// mockData
import { notice_board_fake_data } from '../../MockDatas/MockData';

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
        {notice_board_fake_data.slice(0, 8).map((data, idx) => {
          return <TextEntry key={idx} data={data} />;
        })}
      </TextBox>
    </HomeItemBox>
  );
};

export default NoticeBoardBox;
