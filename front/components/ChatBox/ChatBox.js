import React from 'react';
// styled-components
import styled from 'styled-components';
// components
import ChatListEntry from './ChatListEntry';

const ChatBox = () => {
  let fakeData = [
    {
      user: '고윤혁',
      message: '관리자 안녕하세요.',
    },
    {
      user: '관리자',
      message: '고윤혁 안녕하세요.',
    },
    {
      user: '샘플보드',
      message: '사냥꾼 안녕하세요.',
    },
    {
      user: '봄봄',
      message: '봄봄입니다. 안녕하세요.',
    },
    {
      user: '데브라이너',
      message: '주식회사 데브라이너입니다. 안녕하세요.',
    },
  ];

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
          {fakeData.map((data) => (
            <ChatListEntry data={data} />
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

const ChatContainer = styled.div`
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
`;

const ChatBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px 0;
`;

const Title = styled.div`
  font-weight: bold;
`;

const UserCount = styled.div`
  min-width: 13px;
  min-height: 13px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-size: 0.7em;
  color: #697183;

  padding: 2px 10px;

  background-color: #f5f6f9;
  border-radius: 4px;
`;

const ChatBoxWrapper = styled.div`
  position: relative;
  padding: 0 10px;
  height: 260px;
`;

const ChatListUl = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  height: 90%;

  padding: 10px;
  margin: 0;

  word-break: break-all;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 2px;

  list-style: none;
`;

const DataTimeLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #888;
  font-size: 0.9em;
  padding: 6px 0;
`;

const MessageForm = styled.form`
  display: flex;
  box-sizing: border-box;
`;

const MassageInput = styled.input`
  flex: 1;
  outline: none;

  background-color: #e9ebf1;

  width: 100%;

  font-size: 1em;

  padding-left: 15px;
  padding-right: 15px;
  /* background-color: #f5f6f9; */

  border: 0;
  border-radius: 6px;

  margin: 10px;
  margin-right: 0;

  box-sizing: border-box;
`;

const SendBtn = styled.button`
  cursor: pointer;
  font-size: 1em;
  width: 50px;
  height: 40px;
  margin: 10px;
  color: #fff;
  background-color: #697183;
  border-radius: 6px;
  border: 0;
  box-sizing: border-box;
  word-break: keep-all;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #525867;
  }
  :active {
    background-color: #697183;
  }
`;
