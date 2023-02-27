import React from 'react';
import Link from 'next/link';
// styled-components
import { Dot, ImgSvg } from '../../styles/pages/BoardEntrySt';
import styled from 'styled-components';

const PostCardEntry = ({ data }) => {
  return (
    <>
      <Link href="/gallery/#">
        <ImageBox>
          <PostImg src={data.src} />
        </ImageBox>
        <PostInfo id="info">
          <div id="titleContainer">
            <span>{data.title}</span>
          </div>
          <ImageEtc id="title-etc">
            <ImgSvg src="/images/10.svg" />
            <div id="작성자">{data.user_name}</div>
            <Dot />
            <div id="permissionName">{data.permission_name}</div>
            <Dot />
            <div id="datetime">{data.datetime}</div>
          </ImageEtc>
        </PostInfo>
      </Link>
    </>
  );
};

export default PostCardEntry;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  padding-bottom: 78.43%;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const PostInfo = styled.div`
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const PostImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ImageEtc = styled.div`
  display: flex;
  align-items: center;

  color: #9da5b6;
`;
