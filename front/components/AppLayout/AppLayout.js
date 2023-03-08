import React, { useEffect } from 'react';
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
// redux
import { useSelector } from 'react-redux';

/********************************
 * 세로 1280px 이하부터 탭/모바일 반응형
 ********************************/

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user); // me && me.user.user_id
  console.log('me in AppLayout: ', me);

  const onClickAlert = () => {
    alert('해당 기능을 준비중입니다.');
  };

  return (
    <LayoutWrapper>
      <Header>
        <SubNavbarLine>
          <SubNavbar />
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
            {me ? <UserBox /> : <LoginBox />}
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

export default AppLayout;
