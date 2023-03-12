import React, { useCallback, useEffect } from 'react';
import Router from 'next/router';
// styled-components
import { LoginForm, InputBox, Input, Button } from '../../styles/components/LoginBox/LoginBoxSt';
import { KakaoLoginWrapper } from '../../styles/pages/LoginSt';
// custom hooks
import useInput from '../../customHooks/useInput';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../../reducers/user';

const LoginBox = () => {
  const dispatch = useDispatch();

  const { logInLoading, loginDone, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail, setEmail] = useInput(''); // setText('') 요청이가면 비운다.
  const [password, onChangePassword, setPassword] = useInput('');

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(loginRequestAction({ email, password }));
    },
    [email, password]
  );

  const KakaoLoginClick = () => {
    console.log('test');
  };

  return (
    <LoginForm onSubmit={onClickSubmit}>
      <InputBox>
        <Input type="email" placeholder="이메일" value={email} onChange={onChangeEmail} />
        <Input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
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
