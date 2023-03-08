import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
// components
import SubNavbar from '../Navbar/SubNavbar';
import MainNavbar from '../Navbar/MainNavbar';
import Navbar from '../Navbar/Navbar';
import LoginBox from '../LoginBox/LoginBox';
import UserBox from '../LoginBox/UserBox';
import ChatBox from '../ChatBox/ChatBox';
import BannerSideTop from '../Banner/BannerSideTop';
import Footer from './Footer';
// styled-components
import {
  LayoutWrapper,
  Header,
  SubNavbarLine,
  NavbarFooter,
  Main,
  Aside,
  Pages,
  LoginSection,
  Section,
  CustomLink,
  ButtonList,
} from '../../styles/components/AppLayout/AppLayoutSt';
// custom hooks
import useInput from '../../customHooks/useInput';
// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../../store/configureStore';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';

/********************************
 * 세로 1280px 이하부터 탭/모바일 반응형
 ********************************/

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user); // me && me.user.user_id

  const onClickAlert = () => {
    alert('해당 기능을 준비중입니다.');
  };

  return (
    <LayoutWrapper>
      <Header>
        <SubNavbarLine>
          {/* <LoginBox /> */}
          {me ? <div>정보수정, 로그아웃</div> : <SubNavbar />}
        </SubNavbarLine>
        <SubNavbarLine>
          <MainNavbar />
        </SubNavbarLine>
        <NavbarFooter>
          <Navbar />
        </NavbarFooter>
      </Header>
      <Main>
        <Aside>
          <LoginSection>
            {/* <LoginBox /> */}
            {me ? <UserBox me={me} /> : <LoginBox />}
            <Section>
              <CustomLink href="/signup">회원가입</CustomLink>
              <CustomLink href="/findInfo">아이디•비밀번호 찾기</CustomLink>
            </Section>
          </LoginSection>

          <ChatBox />
          <BannerSideTop />
        </Aside>

        <Pages>
          {children}
          <ButtonList>
            <img src="/images/naver_quick.png" onClick={onClickAlert} />
            <img src="/images/kakao_quick.png" onClick={onClickAlert} />
            <Link href="#">
              <img src="/images/top_btn.png" />
            </Link>
          </ButtonList>
        </Pages>
      </Main>

      <Footer />
    </LayoutWrapper>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
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

export default AppLayout;
