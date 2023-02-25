import React from 'react';
import PropTypes from 'prop-types';
// components
import SubNavbar from '../Navbar/SubNavbar';
import MainNavbar from '../Navbar/MainNavbar';
import Navbar from '../Navbar/Navbar';
// styled-components
import { LayoutWrapper, Header, NavbarFooter, Main } from '../../styles/components/AppLayout/AppLayoutSt';

/********************************
 * 세로 1280px 이하부터 탭/모바일 반응형
 ********************************/

const AppLayout = ({ children }) => {
  // TODO...

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
        <div>{children}</div>
      </Main>
    </LayoutWrapper>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
