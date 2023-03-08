import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
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

// 회원가입
const Signup = () => {
  const [email, onChangeEmail, setEmail] = useInput(''); // setText('') 요청이가면 비운다.
  const [password, onChangePassword, setPassword] = useInput(''); // setText('') 요청이가면 비운다.
  const [passwordConfirm, onChangePasswordConfirm, setPasswordConfirm] = useInput(''); // setText('') 요청이가면 비운다.
  const [name, onChangeName, setName] = useInput(''); // setText('') 요청이가면 비운다.
  const [nickname, onChangeNickname, setNickname] = useInput(''); // setText('') 요청이가면 비운다.
  const [phoneNum, onChangePhoneNum, setPhoneNum] = useInput(''); // setText('') 요청이가면 비운다.
  const [adress, onChangeAdress, setAdress] = useInput(''); // setText('') 요청이가면 비운다.

  const [checked, setChecked] = useState(false);

  const onClickSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('아메일을 입력하세요.');
    } else if (!password) {
      alert('비밀번호를 입력하세요.');
    } else if (!passwordConfirm) {
      alert('비밀번호를 확인해주세요.');
    } else if (!name) {
      alert('이름을 입력해주세요.');
    } else if (!nickname) {
      alert('닉네임을 입력해주세요.');
    } else if (!phoneNum) {
      alert('전화번호를 입력해주세요');
    } else if (!adress) {
      alert('주소를 입력해주세요');
    }

    if (checked) {
      console.log('dispatch: ', {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
        nickname: nickname,
        phoneNum: phoneNum,
        adress: adress,
        authority: '사용자', // 일반 사용자 권한
      });

      // 회원가입이 완료되면 email과 password를 통해 바로 로그인을 진행

      window.location = '/'; // 회원가입 완료 시 로그인된 상태로 메인홈 이동
      //! 요청 후 입력된 정보 초기화
      // setEmail('');
      // setPassword('');
      // setPasswordConfirm('');
      // setName('');
      // setNickname('');
      // setPhoneNum('');
      // setAdress('');
    } else {
      alert('회원가입을 위해서 이용약관의 동의가 필요합니다.');
    }
  };

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

export default Signup;
