import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background-color: #ebedf3;
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
  height: 1000px;

  width: 1280px;
  margin: auto;
`;
