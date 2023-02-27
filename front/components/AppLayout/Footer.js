import React from 'react';
import Link from 'next/link';
// styled-components
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterHead>
        <div>
          <Link href="#">이용약관</Link>
        </div>
        |
        <div>
          <Link href="#">개인정보처리방침</Link>
        </div>
        |
        <div>
          <Link href="#">RSS</Link>
        </div>
      </FooterHead>
      <Intro>게시판 샘플사이트</Intro>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 100px 0;
`;

const FooterHead = styled.div`
  display: flex;
  gap: 10px;
  color: rgba(0, 0, 0, 0.3);

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.3);
    font-size: 15px;

    :hover {
      font-weight: 400;
      color: rgb(0 0 0 / 56%);
    }
  }
`;

const Intro = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-size: 17px;
  font-weight: bold;
`;
