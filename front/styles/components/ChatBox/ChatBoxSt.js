import styled from 'styled-components';

export const ChatContainer = styled.div`
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
`;

export const ChatBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px 0;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const UserCount = styled.div`
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

export const ChatBoxWrapper = styled.div`
  position: relative;
  padding: 0 10px;
  height: 260px;
`;

export const ChatListUl = styled.ul`
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

export const DataTimeLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #888;
  font-size: 0.9em;
  padding: 6px 0;
`;

export const MessageForm = styled.form`
  display: flex;
  box-sizing: border-box;
`;

export const MassageInput = styled.input`
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

export const SendBtn = styled.button`
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
