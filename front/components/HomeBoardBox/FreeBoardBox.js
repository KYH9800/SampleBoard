import React from 'react';
import Link from 'next/link';
// styled-components
import { HomeItemBox, BoxHeader, TextBox } from '../../styles/pages/HomeSt';
// components
import TextEntry from './TextEntry';

// mockData
import { free_board_fake_data } from '../../MockDatas/MockData';

// 자유게시판
const FreeBoardBox = () => {
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
        {free_board_fake_data.slice(0, 8).map((data, idx) => {
          return <TextEntry key={idx} data={data} />;
        })}
      </TextBox>
    </HomeItemBox>
  );
};

export default FreeBoardBox;
