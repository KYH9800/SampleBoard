import React, { useEffect, useState } from 'react';
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

import NewPostSideBox from '../AppLayout/NewPostSideBox';
import BestPostSideBox from '../AppLayout/BestPostSideBox';
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
  ChaboxLine,
  CloseBox,
  Img,
} from '../../styles/components/AppLayout/AppLayoutSt';

// redux
import { useSelector } from 'react-redux';

/********************************
 * 세로 1280px 이하부터 탭/모바일 반응형
 ********************************/

const AppLayout = ({ children }) => {
  const [messageToAdmin, setMessageToAdmin] = useState(false);
  const { me, loginDone, logoutDone } = useSelector((state) => state.user); // me && me.user.user_id

  useEffect(() => {
    if (loginDone) {
      setMessageToAdmin(false);
    }
    if (logoutDone) {
      setMessageToAdmin(false);
    }
  }, [loginDone, logoutDone]);

  const onClickMessageToAdmin = () => {
    setMessageToAdmin((prevState) => !prevState);
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
            {me ? (
              <UserBox />
            ) : (
              <>
                <LoginBox />
                <Section>
                  <CustomLink href="/signup">회원가입</CustomLink>
                  <CustomLink href="/findInfo">아이디•비밀번호 찾기</CustomLink>
                </Section>
              </>
            )}
          </LoginSection>

          <NewPostSideBox />
          <BestPostSideBox />
          <BannerSideTop />
        </Aside>

        <Pages>
          {children}
          <ButtonList>
            {/* <img src="/images/kakao_quick.png" onClick={onClickAlert} /> */}
            {me ? (
              messageToAdmin ? (
                <ChaboxLine>
                  <CloseBox onClick={onClickMessageToAdmin}>닫기</CloseBox>
                  <ChatBox />
                </ChaboxLine>
              ) : (
                <Img src="/images/naver_quick.png" onClick={onClickMessageToAdmin} />
              )
            ) : null}
            <Link href="#">
              <Img src="/images/top_btn.png" />
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
