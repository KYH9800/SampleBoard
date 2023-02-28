import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// styled-components
import {
  TitleContainer,
  Title,
  BoarderList,
  SearchForm,
  Section,
  SearchInput,
  SearchButton,
} from '../styles/pages/FreeSt';
// components
import BoardEntry from '../components/Pages/BoardEntry';

// mockData
import { notice_board_fake_data } from '../MockDatas/MockData';

// 공지사항
const Notice = () => {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit Search');
  };

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>공지사항 - 게시판 샘플</title>
      </Head>

      <section id="searchAndWrite">
        <SearchForm onSubmit={onSearchSubmit}>
          <div>
            <Section>
              <option>제목</option>
              <option>제목 + 내용</option>
              <option>닉네임</option>
            </Section>
          </div>
          <div>
            <SearchInput type="text" placeholder="검색어" />
          </div>
          <div>
            <SearchButton>검색</SearchButton>
          </div>
        </SearchForm>
      </section>

      <TitleContainer id="titleContainer">
        <Title>공지사항</Title>
      </TitleContainer>

      <BoarderList id="boarderList">
        {notice_board_fake_data.map((data, idx) => (
          <BoardEntry key={idx} data={data} />
        ))}
      </BoarderList>
    </AppLayout>
  );
};

export default Notice;
