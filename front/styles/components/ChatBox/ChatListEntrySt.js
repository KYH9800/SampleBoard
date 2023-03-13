import styled from 'styled-components';

export const UserMessageLine = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    margin-top: 1px;
    margin-bottom: 3px;
    font-size: 14px;
  }
`;

export const UserNickname = styled.span`
  cursor: pointer;

  font-size: 14px;

  margin-right: 10px;
  color: #9da5b6;
`;

export const AdminName = styled.span`
  font-weight: 600;
`;

export const ChatNoticeLogoImg = styled.img`
  cursor: pointer;
  width: 15px;
  height: 15px;
`;

export const MessageDate = styled.span`
  margin-left: 9px;
`;

export const MyMessage = styled.li`
  position: relative;
  display: flex;
  justify-content: end;
`;
