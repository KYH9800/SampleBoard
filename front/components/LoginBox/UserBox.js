import React, { useEffect } from 'react';
// styled-components
import { UserBoxWrapper } from '../../styles/components/LoginBox/UserBoxSt';
// styled-components
import {
  UserProfileLine,
  UserImage,
  UserNickname,
  UserAuthority,
  UserPostsInfoLine,
  PostCount,
  ButtonLine,
  ButtonTopLine,
  Button,
  LinkButton,
} from '../../styles/components/LoginBox/UserBoxSt';
// antd
import { LoadingOutlined } from '@ant-design/icons';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';

const UserBox = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user); // me && me.user.user_id
  // console.log('me: ', me);

  const onClickLogout = (e) => {
    e.preventDefault();

    if (confirm('로그아웃을 진행하시겠습니까?')) {
      dispatch(logoutRequestAction());
    }
  };

  return (
    <UserBoxWrapper>
      <UserProfileLine>
        <UserImage src="/images/1672023331502-3o43kwpfrii.jpg" />
        <div>
          <UserNickname>{me.user ? me.user.MyInfo.nickname : <LoadingOutlined />}님</UserNickname>
          <UserAuthority>{me.user?.authority}</UserAuthority>
        </div>
      </UserProfileLine>
      <UserPostsInfoLine>
        <span>게시물</span>
        <PostCount className="post-count">
          {me.user ? !me.user?.Post ? 0 : me.user?.Post.length : <LoadingOutlined />}개
        </PostCount>
      </UserPostsInfoLine>
      <UserPostsInfoLine>
        <span>스크랩</span>
        <PostCount className="post-count">
          {me.user ? !me.user?.Post ? 0 : me.user?.Post.length : <LoadingOutlined />}개
        </PostCount>
      </UserPostsInfoLine>
      <ButtonLine>
        <ButtonTopLine>
          <LinkButton href="/myPage">정보수정</LinkButton>
          <LinkButton href="/myActivity">나의활동</LinkButton>
        </ButtonTopLine>
        <Button onClick={onClickLogout}>로그아웃</Button>
      </ButtonLine>
    </UserBoxWrapper>
  );
};

export default UserBox;
// admin00@admin.com
