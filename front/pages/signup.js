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

// 회원가입
const Signup = () => {
  const [checked, setChecked] = useState(false);
  console.log('checked: ', checked);

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit Search');
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
            <SinputInput type="email" placeholder="이메일" />
          </TextWrapper>
          <TextWrapper>
            <InputTilte>비밀번호</InputTilte>
            <SinputInput type="password" placeholder="비밀번호" />
            <Explanation>8자~20자, 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>비밀번호 확인</InputTilte>
            <SinputInput type="password" placeholder="비밀번호 확인" />
            <Explanation>위와 동일하게 입력해주세요</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>이름</InputTilte>
            <SinputInput type="text" placeholder="이름" />
          </TextWrapper>
          <TextWrapper>
            <InputTilte>닉네임</InputTilte>
            <SinputInput type="text" placeholder="닉네임" />
            <Explanation>2자~20자</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>전화번호</InputTilte>
            <SinputInput type="tel" placeholder="전화번호" />
            <Explanation>"-" 없이 입력해주세요.</Explanation>
          </TextWrapper>
          <TextWrapper>
            <InputTilte>주소</InputTilte>
            <SinputInput type="text" placeholder="주소" />
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
