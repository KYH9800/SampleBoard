import React from 'react';
// styled-components
import styled from 'styled-components';

const LoginBox = () => {
  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <LoginForm onSubmit={onClickSubmit}>
      <InputBox>
        <Input type="email" placeholder="아이디 또는 이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
      </InputBox>
    </LoginForm>
  );
};

export default LoginBox;

const LoginForm = styled.form`
  width: 360px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  height: 50px;

  padding-left: 15px;
  padding-right: 15px;
  margin: 0;

  font-size: 1em;
  outline: none;

  border-radius: 8px;
  border: 0;
`;

const Button = styled.button`
  cursor: pointer;

  width: 100%;
  height: 50px;

  font-size: 1em;
  padding: 10px 0;

  color: #fff;
  background-color: #434b57;

  border: 0;
  border-radius: 8px;
`;
