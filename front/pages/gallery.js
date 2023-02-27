import React from 'react';
import Head from 'next/head';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// styled-components
import { TitleContainer, Title, SearchForm, Section, SearchInput, SearchButton } from '../styles/pages/FreeSt';
import { PostCardList } from '../styles/pages/PostCardEntry';
// components
import PostCardEntry from '../components/Pages/PostCardEntry';

// mockData
import { gallery_card_fake_data } from '../MockDatas/MockData';

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

      <PostCardList id="post-card-list">
        {gallery_card_fake_data.map((data) => (
          <PostCardEntry data={data} />
        ))}
      </PostCardList>
    </AppLayout>
  );
};

export default Gallery;
