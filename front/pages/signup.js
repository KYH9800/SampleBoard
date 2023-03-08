import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
// AppLayout
import AppLayoutWithoutSide from '../components/AppLayout/AppLayoutWithoutSide';
// styled-components
import { Article } from '../styles/pages/LoginSt';
import {
  SingupWrapper,
  TextWrapper,
  InputTilte,
  SinputInput,
  Explanation,
  UserAgreeBox,
  AgreeCheck,
  BottomLine,
  SingupButton,
  AreadyUser,
  service,
  userInfoAgree,
} from '../styles/pages/signupSt';
// custom hooks
import useInput from '../customHooks/useInput';
// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_REQUEST, LOGIN_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

// 회원가입
const Signup = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail, setEmail] = useInput(''); // setText('') 요청이가면 비운다.
  const [password, onChangePassword, setPassword] = useInput('');
  const [passwordConfirm, onChangePasswordConfirm, setPasswordConfirm] = useInput('');
  const [name, onChangeName, setName] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [phoneNum, onChangePhoneNum, setPhoneNum] = useInput('');
  const [adress, onChangeAdress, setAdress] = useInput('');

  const [checked, setChecked] = useState(false);

  const { signupLoading, signupDone, signupError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me && me.user.user_id) {
      Router.replace('/'); // 페이지가 없어짐
    }
  }, [me && me.user.user_id]);

  useEffect(() => {
    if (signupDone) {
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setName('');
      setNickname('');
      setPhoneNum('');
      setAdress('');

      // 회원가입 완료 시 자동로그인
      dispatch({
        type: LOGIN_REQUEST,
        data: {
          email: email,
          password: password,
        },
      });

      Router.push('/');
    }
  }, [signupDone]);

  useEffect(() => {
    if (signupError) {
      console.log('signupError: ', signupError);
      alert(signupError);
    }
  }, [signupError]);

  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email) {
        return alert('아메일을 입력하세요.');
      } else if (!password) {
        return alert('비밀번호를 입력하세요.');
      } else if (!passwordConfirm) {
        return alert('비밀번호를 확인해주세요.');
      } else if (password !== passwordConfirm) {
        return alert('비밀번호가 일치하지 않습니다.');
      } else if (!name) {
        return alert('이름을 입력해주세요.');
      } else if (!nickname) {
        return alert('닉네임을 입력해주세요.');
      } else if (!phoneNum) {
        return alert('전화번호를 입력해주세요');
      } else if (!adress) {
        return alert('주소를 입력해주세요');
      }

      // 회원가입이 완료되면 email과 password를 통해 바로 로그인을 진행
      console.log('checked: ', checked);
      if (checked) {
        dispatch({
          type: SIGNUP_REQUEST,
          data: {
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            name: name,
            nickname: nickname,
            phoneNum: phoneNum,
            adress: adress,
            authority: '사용자', // 일반 사용자 권한
          },
        });
      } else {
        return alert('회원가입을 위해서 이용약관의 동의가 필요합니다.');
      }
    },
    [email, password, passwordConfirm, name, nickname, phoneNum, adress]
  );

  const onChangeChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <AppLayoutWithoutSide>
      <Head>
        <meta charSet="utf-8" />
        <title>회원가입 - 게시판 샘플</title>
      </Head>

      <Article>
        <SingupWrapper onSubmit={onClickSubmit}>
          <div>
            <h1>회원가입</h1>
          </div>
          <TextWrapper>
            <InputTilte>이메일</InputTilte>
            <SinputInput type="email" placeholder="이메일" value={email} onChange={onChangeEmail} />
          </TextWrapper>
          <TextWrapper>
            <InputTilte>비밀번호</InputTilte>
            <SinputInput type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
            <Explanation>8자~20자, 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>비밀번호 확인</InputTilte>
            <SinputInput
              type="password"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            <Explanation>위와 동일하게 입력해주세요</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>이름</InputTilte>
            <SinputInput type="text" placeholder="이름" value={name} onChange={onChangeName} />
          </TextWrapper>
          <TextWrapper>
            <InputTilte>닉네임</InputTilte>
            <SinputInput type="text" placeholder="닉네임" value={nickname} onChange={onChangeNickname} />
            <Explanation>2자~20자</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>전화번호</InputTilte>
            <SinputInput type="tel" placeholder="전화번호" value={phoneNum} onChange={onChangePhoneNum} />
            <Explanation>"-" 없이 입력해주세요.</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>주소</InputTilte>
            <SinputInput type="text" placeholder="주소" value={adress} onChange={onChangeAdress} />
            <Explanation>{'ex: 경기도 구리시 인창동 123-123'}</Explanation>
          </TextWrapper>

          <UserAgreeBox>
            <div>
              <span>서비스 이용악관</span>
              <textarea value={service} disabled />
            </div>
            <div>
              <span>개인정보처리방침</span>
              <textarea value={userInfoAgree} disabled />
            </div>

            <AgreeCheck>
              <input type="checkbox" id="agree" checked={checked} onChange={onChangeChecked} />
              <span>위 내용을 모두 확인하였으며, 모두 동의합니다</span>
            </AgreeCheck>
          </UserAgreeBox>

          <BottomLine>
            <SingupButton type="submit">회원가입</SingupButton>

            <AreadyUser>
              이미 가입된 회원이라면?
              <Link href="/login">로그인</Link>
            </AreadyUser>
          </BottomLine>
        </SingupWrapper>
      </Article>
    </AppLayoutWithoutSide>
  );
};

// 내 정보 불러오기, Server Side Rendering
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
  axios.defaults.headers.Cookie = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
});

export default Signup;
