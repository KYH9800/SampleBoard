import React from 'react';
// styled-components
import { LoginForm, InputBox, Input, Button } from '../../styles/components/LoginBox/LoginBoxSt';

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
