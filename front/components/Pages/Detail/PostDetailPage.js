import React from 'react';
import Link from 'next/link';
// components
import PostBox from './PostBox';
import MovieBox from './MovieBox';
// styled-components
import { Dot, Etc, ImgSvg } from '../../../styles/pages/BoardEntrySt';
import {
  PostDetailWrapper,
  BackBtnWrapper,
  BackBtn,
  PostBoxWrapper,
  DetailTitleBox,
  DetailTilte,
  ListAndEdit,
  Left,
  Right,
  Button,
  CommentLine,
  ContentContainerForm,
  NewCommentContent,
  Textarea,
  CommentButton,
} from '../../../styles/pages/Detail/PostDetailPageSt';
// components
import BeforeAndAfterItems from './BeforeAndAfterItems';

// 상세 페이지 단일 페이크 데이터
import { post_data, youtube_data } from '../../../MockDatas/MockData';

const PostDetailPage = ({ data }) => {
  const onEventSubmit = (e) => {
    e.preventDefault();
    console.log('submit!!');
  };

  return (
    <PostDetailWrapper>
      <BackBtnWrapper>
        <label>목록으로</label>
        <BackBtn>
          <Link href={`/${data[0].category}`}>{'< 목록으로'}</Link>
        </BackBtn>
      </BackBtnWrapper>

      <PostBoxWrapper>
        <label>게시글 박스</label>
        <DetailTitleBox>
          <div id="title">
            <span>
              <DetailTilte>재택근무 데스크 셋업</DetailTilte>
            </span>
          </div>
          <div id="etc">
            <div id="left">
              <Etc id="etc">
                <ImgSvg src="/images/10.svg" />
                <div id="작성자">샘플보드</div>
                <Dot />
                <div id="permissionName">관리자</div>
                <Dot />
                <div id="datetime">03-01</div>
              </Etc>
            </div>
            <div id="right"></div>
          </div>
        </DetailTitleBox>

        <div>{data[0].category === 'youtube' ? <MovieBox data={youtube_data} /> : <PostBox data={post_data} />}</div>

        <div />
        <ListAndEdit>
          <Left>
            <Link href="#">
              <Button>목록</Button>
            </Link>
          </Left>
          <Right>
            <div>
              <Button>공유</Button>
            </div>
            <div>
              <Button>추천</Button>
            </div>
          </Right>
        </ListAndEdit>

        <CommentLine id="comment-line">댓글</CommentLine>

        <ContentContainerForm onSubmit={onEventSubmit}>
          <NewCommentContent>
            <Textarea name="content" placeholder="로그인 필요" disabled />
          </NewCommentContent>
          <CommentButton>
            <button type="submit">등록</button>
          </CommentButton>
        </ContentContainerForm>
      </PostBoxWrapper>

      <PostBoxWrapper>
        <label>이전 및 다음 게시글</label>
        {data.slice(0, 2).map((data, idx) => {
          return <BeforeAndAfterItems key={idx} data={data} />;
        })}
      </PostBoxWrapper>
    </PostDetailWrapper>
  );
};

export default PostDetailPage;
