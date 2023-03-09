import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 360px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  height: 50px;

  padding-left: 15px;
  padding-right: 15px;
  margin: 0;

  font-size: 1em;
  outline: none;

  border-radius: 8px;
  border: 0;
`;

export const Button = styled.button`
  cursor: pointer;

  width: 100%;
  height: 50px;

  font-size: 1em;
  padding: 10px 0;

  color: #fff;
  background-color: #697183;

  border: 0;
  border-radius: 8px;
`;
