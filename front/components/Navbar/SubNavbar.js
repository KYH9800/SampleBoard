import React from 'react';
import Link from 'next/link';
// styled-components
import { SubWrapper, ColumnLine, LinkWrapper } from '../../styles/components/Navbar/SubNavbarSt';

const SubNavbar = () => {
  // TODO

  // 다크모드 변환
  const onChangMode = () => {
    alert('준비중인 기능입니다.');
  };

  return (
    <SubWrapper>
      <LinkWrapper>
        <Link href="/">2월 25일 (토)</Link>
        <ColumnLine />
        <Link href="/best">인기 게시글</Link>
        <ColumnLine />
        <Link href="/new">최근 게시글</Link>
        <ColumnLine />
        <a onClick={onChangMode}>다크모드 전환</a>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/signup">회원가입</Link>
        <ColumnLine />
        <Link href="/login">로그인</Link>
      </LinkWrapper>
    </SubWrapper>
  );
};

export default SubNavbar;
