import React from 'react';
import Link from 'next/link';
// styled-components
import { HomeItemBox, BoxHeader, TextBox } from '../../styles/components/AppLayout/NewPostSideBoxSt';
// components
import TextEntry from '../HomeBoardBox/TextEntry';

// mockData
import { new_board_fake_data } from '../../MockDatas/MockData';

// 인기게시글
const BestPostSideBox = () => {
  return (
    <HomeItemBox>
      <BoxHeader>
        <h3>
          <Link href="new">인기 게시글</Link>
        </h3>
        <div>
          <Link href="new">더보기</Link>
        </div>
      </BoxHeader>

      <TextBox>
        {new_board_fake_data.slice(0, 10).map((data, idx) => {
          return <TextEntry key={idx} data={data} />;
        })}
      </TextBox>
    </HomeItemBox>
  );
};

export default BestPostSideBox;
