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

// mockData
import { free_board_fake_data } from '../MockDatas/MockData';

// 갤러리
const Gallery = () => {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit Search');
  };

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>갤러리 - 게시판 샘플</title>
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
        <Title>갤러리</Title>
      </TitleContainer>
    </AppLayout>
  );
};

export default Gallery;
