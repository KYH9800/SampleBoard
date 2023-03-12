import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// styled-components
import {
  TitleContainer,
  Title,
  BoarderList,
  TopLine,
  AddPostButton,
  SearchForm,
  Section,
  SearchInput,
  SearchButton,
} from '../styles/pages/FreeSt';
// components
import BoardEntry from '../components/Pages/BoardEntry';
// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_REQUEST, LOGIN_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

// mockData
import { free_board_fake_data } from '../MockDatas/MockData';

// 자유게시판
const Free = () => {
  const { me, loginDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (loginDone) {
      Router.push('/free');
    }
  }, [loginDone]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit Search');
  };

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>자유게시판 - 게시판 샘플</title>
      </Head>

      <section id="searchAndWrite">
        <TopLine>
          <div>{me ? <AddPostButton href="addPost">글쓰기</AddPostButton> : null}</div>
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
        </TopLine>
      </section>

      <TitleContainer id="titleContainer">
        <Title>자유게시판</Title>
      </TitleContainer>

      <BoarderList id="boarderList">
        {free_board_fake_data.map((data, idx) => (
          <BoardEntry key={idx} data={data} />
        ))}
      </BoarderList>
    </AppLayout>
  );
};

// 내 정보 불러오기, Server Side Rendering
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
  axios.defaults.headers.Cookie = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
});

export default Free;
