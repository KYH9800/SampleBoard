import React from 'react';
// styled-components
import {
  UserMessageLine,
  UserNickname,
  AdminName,
  ChatNoticeLogoImg,
  MessageDate,
  MyMessage,
} from '../../styles/components/ChatBox/ChatListEntrySt';

const ChatListEntry = ({ data }) => {
  return (
    <>
      {1 ? (
        // 다른 사용자가 작성한 메세지
        <UserMessageLine>
          <UserNickname>
            {/* <ChatNoticeLogoImg src="/images/10.svg" /> */}
            <AdminName>{data.user}님</AdminName>
            <MessageDate>2023.03.13 08:58:00</MessageDate>
          </UserNickname>
          <div>
            {data.message.split('\n').map((text, idx) => (
              <div key={idx}>
                {text}
                <br />
              </div>
            ))}
          </div>
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
