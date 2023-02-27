import styled from 'styled-components';
import Link from 'next/link';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: #fff;
`;

export const NavbarFooter = styled.sub`
  background-color: #888;

  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  margin: 0 auto;

  width: 1280px;
`;

export const Aside = styled.aside`
  order: 1;

  width: 360px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Pages = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  order: 2;

  width: 100%;
`;

export const LoginSection = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const CustomLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  font-size: 15px;

  :hover {
    color: black;
  }
`;

// 페이지 버튼
export const ButtonList = styled.div`
  position: fixed;
  right: 1%;
  bottom: 2%;

  display: flex;
  flex-direction: column;

  img {
    cursor: pointer;
    width: 58px;
    height: 58px;
  }
`;
