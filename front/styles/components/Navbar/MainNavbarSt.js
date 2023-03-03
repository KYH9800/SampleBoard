import styled from 'styled-components';
import Link from 'next/link';

export const MainNavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1280px;

  padding: 5px 0;
`;

export const CustomLink = styled(Link)`
  display: block;
  margin-top: 12px;
`;

// 와플보드 로고
export const LogoImg = styled.img`
  height: 55px;
  border-radius: 5px;
`;

// 검색창 박스
export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;

  border-radius: 16px;
  border: 2px solid #bbb;

  :hover {
    border: 2px solid #908f8f;
  }
`;

// 검색 버튼
export const SearchInput = styled.input`
  background-color: #fff;
  border: none;
  padding: 0 18px;

  width: 166px;
  height: 40px;

  font-size: 16px;

  border-radius: 16px;

  outline: none;
`;

// 검색 아이콘 버튼
export const SearchButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  padding: 0 20px;

  border: none;
  border-radius: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`;
