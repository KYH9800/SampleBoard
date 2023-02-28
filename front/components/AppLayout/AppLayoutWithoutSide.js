import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
// components
import SubNavbar from '../Navbar/SubNavbar';
import MainNavbar from '../Navbar/MainNavbar';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';
// styled-components
import { LayoutWrapper, Header, NavbarFooter, Main, ButtonList } from '../../styles/components/AppLayout/AppLayoutSt';

/********************************
 * 사이트 Box가 없는 레이아웃 컴포넌트
 ********************************/
const AppLayoutWithoutSide = ({ children }) => {
  const onClickAlert = () => {
    alert('해당 기능을 준비중입니다.');
  };

  return (
    <LayoutWrapper>
      <Header>
        <SubNavbar />
        <MainNavbar />
        <NavbarFooter>
          <Navbar />
        </NavbarFooter>
      </Header>
      <Main>
        {children}
        <ButtonList>
          <img src="/images/naver_quick.png" onClick={onClickAlert} />
          <img src="/images/kakao_quick.png" onClick={onClickAlert} />
          <Link href="#">
            <img src="/images/top_btn.png" />
          </Link>
        </ButtonList>
      </Main>

      <Footer />
    </LayoutWrapper>
  );
};

AppLayoutWithoutSide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayoutWithoutSide;
