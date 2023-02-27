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

// mockData
import { fakeData } from '../../MockDatas/MockData';

const ChatBox = () => {
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
          <DataTimeLi>1월 11일</DataTimeLi>
          {fakeData.map((data, idx) => (
            <ChatListEntry key={idx} data={data} />
          ))}
        </ChatListUl>
      </ChatBoxWrapper>
      <MessageForm onSubmit={onClickSubmit}>
        {1 ? <MassageInput type="text" /> : <MassageInput type="text" placeholder="로그인 필요" disabled />}
        <SendBtn>전송</SendBtn>
      </MessageForm>
    </ChatContainer>
  );
};

export default ChatBox;
