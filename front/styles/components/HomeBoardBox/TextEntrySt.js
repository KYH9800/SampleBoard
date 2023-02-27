import styled from 'styled-components';
import Link from 'next/link';

export const TextBoxWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  color: #9da5b6;
`;

export const TextArticle = styled.article`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Svg = styled.svg`
  width: 14px;
  height: 14px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #222;

  :hover {
    text-decoration: underline;
  }
`;
