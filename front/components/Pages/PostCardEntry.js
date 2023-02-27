import React from 'react';
import Link from 'next/link';
// styled-components
import { Dot, ImgSvg } from '../../styles/pages/BoardEntrySt';
import { ImageBox, PostInfo, TitleContainer, PostImg, ImageEtc } from '../../styles/pages/PostCardEntry';

const PostCardEntry = ({ data }) => {
  return (
    <>
      <Link href="/gallery/#">
        <ImageBox>
          <PostImg src={data.src} />
        </ImageBox>
        <PostInfo id="info">
          <TitleContainer id="titleContainer">
            <span>{data.title}</span>
          </TitleContainer>
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
