import React, { useEffect } from 'react';
// styled-components
import { UserBoxWrapper } from '../../styles/components/LoginBox/UserBoxSt';
// redux
import { useSelector, useDispatch } from 'react-redux';

const UserBox = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user); // me && me.user.user_id
  console.log('me: ', me);

  console.log('me.user?.Post: ', me.user?.Post);

  return (
    <UserBoxWrapper>
      <h3>
        <span>{me.user?.MyInfo.nickname}</span> 님
      </h3>
      <h3>
        <span>게시물</span>
        <span> {!me.user?.Post ? 0 : me.user?.Post.length}</span>개
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
// admin00@admin.com
