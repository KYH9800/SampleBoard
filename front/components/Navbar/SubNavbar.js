import React from 'react';
import Link from 'next/link';
// styled-components
import { SubWrapper, LoginUser, ColumnLine, LinkWrapper } from '../../styles/components/Navbar/SubNavbarSt';
// redux
import { useSelector } from 'react-redux';

const SubNavbar = () => {
  const { me } = useSelector((state) => state.user); // me && me.user.user_id

  // 다크모드 변환
  const onChangMode = () => {
    alert('준비중인 기능입니다.');
  };

  return (
    <SubWrapper>
      <LinkWrapper>
        <Link href="/new">최근글</Link>
        <ColumnLine />
        <Link href="/best">인기글</Link>
        <ColumnLine />
        <a onClick={onChangMode}>다크모드 전환</a>
      </LinkWrapper>
      <LinkWrapper>
        {me ? (
          <>
            <LoginUser>
              <span>{me.user?.MyInfo.nickname}</span>님 환영합니다.
            </LoginUser>
            <ColumnLine />
            <Link href="/myPage">마이페이지</Link>
          </>
        ) : (
          <>
            <Link href="/signup">회원가입</Link>
            <ColumnLine />
            <Link href="/login">로그인</Link>
          </>
        )}
      </LinkWrapper>
    </SubWrapper>
  );
};

export default SubNavbar;
