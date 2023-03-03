import React from 'react';
// styled-components
import { LoginForm, InputBox, Input, Button } from '../../styles/components/LoginBox/LoginBoxSt';
import { KakaoLoginWrapper } from '../../styles/pages/LoginSt';

const LoginBox = () => {
  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const KakaoLoginClick = () => {
    console.log('test');
  };

  return (
    <LoginForm onSubmit={onClickSubmit}>
      <InputBox>
        <Input type="email" placeholder="아이디 또는 이메일" />
        <Input type="password" placeholder="비밀번호" />
        <Button>로그인</Button>
        <KakaoLoginWrapper onClick={KakaoLoginClick}>
          <img src="/images/kakao_logo.svg" />
          <p>카카오로 바로 시작하기</p>
        </KakaoLoginWrapper>
      </InputBox>
    </LoginForm>
  );
};

export default LoginBox;
