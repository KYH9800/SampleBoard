import styled from 'styled-components';
import Link from 'next/link';

export const ImageEntryBoxWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const CustomImage = styled.img`
  width: 116px;
  height: 91px;
  object-fit: cover;
  border-radius: 12px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #222;
`;
