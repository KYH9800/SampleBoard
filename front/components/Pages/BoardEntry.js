import React from 'react';
// styled-components
import {
  Dot,
  BoardTilte,
  ListCustomLink,
  BoarderListTileLine,
  Etc,
  ImgSvg,
  Img,
  ImgBox,
} from '../../styles/pages/BoardEntrySt';

const BoardEntry = ({ data }) => {
  return (
    <ListCustomLink href="/free/#">
      <BoarderListTileLine id="boarderListTileLine">
        <div id="titleContainer">
          <BoardTilte>{data.title}</BoardTilte>
        </div>
        <Etc id="etc">
          <ImgSvg src="/images/10.svg" />
          <div id="작성자">{data.user_name}</div>
          <Dot />
          <div id="permissionName">{data.permission_name}</div>
          <Dot />
          <div id="datetime">{data.datetime}</div>
        </Etc>
      </BoarderListTileLine>

      <ImgBox>
        <Img src={data.src} />
      </ImgBox>
    </ListCustomLink>
  );
};

export default BoardEntry;
