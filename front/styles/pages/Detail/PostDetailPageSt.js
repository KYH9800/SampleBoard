import styled from 'styled-components';

export const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    display: none;
  }
`;

export const BackBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BackBtn = styled.div`
  background-color: #fff;
  border-radius: 12px;

  padding: 13px 23px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);

  a {
    font-size: 16.5px;
    font-weight: bold;
    color: #222;
    text-decoration: none;
  }
`;

export const PostBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 95%;

  background-color: #fff;
  border-radius: 12px;

  padding: 20px;

  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);

  #title {
    margin-bottom: 10px;
  }

  #etc {
    padding: 5px 0;
  }
`;

export const DetailTitleBox = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
`;

export const DetailTilte = styled.h1`
  color: #000;
  display: inline;

  font-size: 1.6em;
  font-weight: bold;
`;

export const ListAndEdit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Left = styled.div`
  display: flex;
  gap: 10px;
`;

export const Right = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 1em;
  color: #697183;
  background-color: #f5f6f9;
  border-radius: 6px;
  padding: 10px 20px;
  border: 0;
  word-break: keep-all;

  :hover {
    background-color: #e8eaef;
  }
`;

export const CommentLine = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

export const ContentContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #f8f9fc;
`;

export const NewCommentContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 60px;
  font-size: 1em;
  line-height: 1.2em;
  border: 0;
  background-color: transparent;
`;

export const CommentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 0;

  button {
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    background-color: #cacfd8;
    border: 0;
    padding: 10px 20px;
    border-radius: 15px;
  }
`;
