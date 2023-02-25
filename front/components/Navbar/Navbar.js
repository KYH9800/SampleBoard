import React from 'react';
import Link from 'next/link';
// styled-components
import {
  NavbarWrapper,
  CustomUl,
  Community,
  CommunityUl,
  MoreComunity,
  MoreCustomUl,
} from '../../styles/components/Navbar/NavbarSt';

const Navbar = () => {
  // TODO

  return (
    <NavbarWrapper>
      <CommunityUl>
        <Link href="/free">
          <Community>커뮤니티</Community>
        </Link>
        <MoreComunity className="more">
          <MoreCustomUl>
            <Link href="/free">
              <p>자유게시판</p>
            </Link>
          </MoreCustomUl>
          <MoreCustomUl>
            <Link href="/humor">
              <p>유머게시판</p>
            </Link>
          </MoreCustomUl>
        </MoreComunity>
      </CommunityUl>
      <CustomUl>
        <Link href="/gallery">
          <p>갤러리</p>
        </Link>
      </CustomUl>
      <CustomUl>
        <Link href="/youtube">
          <p>유튜브</p>
        </Link>
      </CustomUl>
      <CustomUl>
        <Link href="/notice">
          <p>공지사항</p>
        </Link>
      </CustomUl>
    </NavbarWrapper>
  );
};

export default Navbar;
