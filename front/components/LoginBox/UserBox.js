import React from 'react';
// styled-components
import { UserBoxWrapper } from '../../styles/components/LoginBox/UserBoxSt';

const UserBox = ({ me }) => {
  console.log('me: ', me);

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <UserBoxWrapper>
      <h3>
        <span>{me.user.MyInfo.nickname}</span> 님
      </h3>
      <h3>
        <span>게시물</span>
        <span>{me.user.MyInfo.nickname}</span> 개
      </h3>
      <div>
        <button>정보수정</button>
      </div>
      <div>
        <button>로그아웃</button>
      </div>
    </UserBoxWrapper>
  );
};

export default UserBox;
