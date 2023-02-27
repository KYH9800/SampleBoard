import styled from 'styled-components';
import Link from 'next/link';

export const Dot = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 100%;
  ::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 2px;
    height: 2px;
    background-color: #d0d4dc;
  }
`;

export const BoardTilte = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1.2em;
`;

export const ListCustomLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: none;
  color: #999999;

  padding: 15px 0;
  margin: 0 15px;

  /* border-bottom: 1px solid black; */
  border-bottom: 1px solid #f5f5f5;
`;

export const BoarderListTileLine = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;
`;

export const Etc = styled.div`
  display: flex;
  align-items: center;

  color: #9da5b6;
`;

export const ImgSvg = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 7px;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 70px;
  height: 54px;
`;
