import React from 'react';
// styled-components
import {
  UserMessageLine,
  UserNickname,
  ChatNoticeLogoImg,
  MyMessage,
} from '../../styles/components/ChatBox/ChatListEntrySt';

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
            {data.message.split('\n').map((text, idx) => (
              <div key={idx}>
                {text}
                <br />
              </div>
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
