import React from 'react';
// styled-components
import {
  ChatContainer,
  ChatBanner,
  Title,
  UserCount,
  ChatBoxWrapper,
  ChatListUl,
  DataTimeLi,
  MessageForm,
  MassageInput,
  SendBtn,
} from '../../styles/components/ChatBox/ChatBoxSt';
// components
import ChatListEntry from './ChatListEntry';
// redux
import { useSelector } from 'react-redux';

// mockData
import { fakeData } from '../../MockDatas/MockData';

const ChatBox = () => {
  const { me } = useSelector((state) => state.user); // me && me.user.user_id

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('send message');
  };

  return (
    <ChatContainer>
      <ChatBanner>
        <Title>실시간채팅</Title>
        <UserCount>{fakeData.length}</UserCount>
      </ChatBanner>
      <ChatBoxWrapper>
        <ChatListUl>
          <DataTimeLi>3월 13일</DataTimeLi>
          {fakeData.map((data, idx) => (
            <ChatListEntry key={idx} data={data} />
          ))}
        </ChatListUl>
      </ChatBoxWrapper>
      <MessageForm onSubmit={onClickSubmit}>
        {me ? (
          <MassageInput type="text" placeholder="기능 구현중..." disabled />
        ) : (
          <MassageInput type="text" placeholder="로그인 필요" disabled />
        )}
        <SendBtn>전송</SendBtn>
      </MessageForm>
    </ChatContainer>
  );
};

export default ChatBox;
