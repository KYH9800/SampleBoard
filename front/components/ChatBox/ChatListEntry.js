import React from 'react';
// styled-components
import styled from 'styled-components';

const ChatListEntry = ({ data }) => {
  return (
    <>
      {1 ? (
        // 다른 사용자가 작성한 메세지
        <UserMessageLine>
          <UserNickname>
            <ChatNoticeLogoImg src="/images/10.svg" />
            {data.user}
          </UserNickname>
          <span>
            {data.message.split('\n').map((text) => (
              <>
                {text}
                <br />
              </>
            ))}
          </span>
        </UserMessageLine>
      ) : (
        // 내가 작성한 메세지
        <MyMessage>
          <span>
            {data.message.split('\n').map((text) => (
              <>
                {text}
                <br />
              </>
            ))}
          </span>
        </MyMessage>
      )}
    </>
  );
};

export default ChatListEntry;

const UserMessageLine = styled.li`
  position: relative;
  display: flex;
`;

const UserNickname = styled.span`
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
`;

const ChatNoticeLogoImg = styled.img`
  width: 14px;
  height: 14px;
`;

const MyMessage = styled.li`
  position: relative;
  display: flex;
  justify-content: end;
`;
