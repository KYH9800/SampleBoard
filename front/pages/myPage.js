import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';

// redux, server side rendering
import { END } from 'redux-saga';
import axios from 'axios';
import wrapper from '../store/configureStore';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST, UPDATE_MY_INFO_REQUEST } from '../reducers/user';

// custom hooks
import useInput from '../customHooks/useInput';

// styled-components
import {
  SingupWrapper,
  TextWrapper,
  InputTilte,
  SinputInput,
  Explanation,
  BottomLine,
  SingupButton,
  AreadyUser,
} from '../styles/pages/signupSt';
import {
  UpdateWrapper,
  UserInfoWrapper,
  ChangeUserImg,
  UserImage,
  UpdateBottomLine,
  UpdateButton,
  UserInfoText,
} from '../styles/pages/myPageSt';

// 마이페이지
const MyPage = () => {
  const dispatch = useDispatch();

  const { me, updateMyInfoLoading, updateMyInfoDone, updateMyInfoError } = useSelector((state) => state.user);
  console.log('me: ', me);

  // me?.nickname || ``
  const [nickname, onChangeNickname, setNickname] = useInput(me?.user?.MyInfo.nickname || '');
  const [phoneNum, onChangePhoneNum, setPhoneNum] = useInput(me?.user?.MyInfo.phone_num || '');
  const [adress, onChangeAdress, setAdress] = useInput(me?.user?.MyInfo.adress || '');
  const [password, onChangePassword, setPassword] = useInput('');
  const [newPassword, onChangeNewPassword, setNewPassword] = useInput('');
  const [newPasswordConfirm, onChangeNewPasswordConfirm, setNewPasswordConfirm] = useInput('');

  useEffect(() => {
    if (!me) {
      Router.replace('/');
    }
  }, [me]);

  useEffect(() => {
    if (updateMyInfoDone) {
      setPassword('');
      setNewPassword('');
      setNewPasswordConfirm('');
      Router.replace('/myPage');
    }
  }, [updateMyInfoDone]);

  useEffect(() => {
    if (updateMyInfoError) {
      console.log('updateMyInfoError: ', updateMyInfoError);
      alert(updateMyInfoError);
    }
  }, [updateMyInfoError]);

  // 취소, 뒤로가기
  const onClickGoBack = () => {
    if (confirm('메인 홈으로 돌아갑니다. 내 정보 수정을 취소하시겠습니까?')) {
      Router.push('/');
    }
  };

  // 프로필 이미지 변경
  const onChangeImg = () => {
    alert('기능을 준비중 입니다.');
  };

  // 서버에 보낼 정보
  const onSubmitUpdate = useCallback(
    (e) => {
      e.preventDefault();

      if (confirm('내 정보를 수정하시겠습니까?')) {
        dispatch({
          type: UPDATE_MY_INFO_REQUEST,
          data: {
            nickname: nickname,
            phoneNum: phoneNum,
            adress: adress,
            password: password,
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm,
          },
        });
      }
    },
    [nickname, phoneNum, adress, password, newPassword, newPasswordConfirm]
  );

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>마이페이지 - 게시판 샘플</title>
      </Head>

      <UpdateWrapper onSubmit={onSubmitUpdate}>
        <div>
          <h1>마이 페이지</h1>
        </div>

        <UserInfoWrapper>
          <ChangeUserImg>
            <UserImage src="/images/1672023331502-3o43kwpfrii.jpg" />
            <TextWrapper>
              <UpdateButton type="button" onClick={onChangeImg}>
                프로필 이미지 수정
              </UpdateButton>
            </TextWrapper>
          </ChangeUserImg>
        </UserInfoWrapper>

        <TextWrapper>
          <InputTilte>닉네임</InputTilte>
          <SinputInput type="text" placeholder="닉네임" value={nickname} onChange={onChangeNickname} />
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

        <br />

        <TextWrapper>
          <InputTilte>현재 비밀번호</InputTilte>
          <SinputInput type="password" placeholder="현재 비밀번호" value={password} onChange={onChangePassword} />
          <Explanation>8자~20자, 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합</Explanation>
        </TextWrapper>
        <TextWrapper>
          <InputTilte>새 비밀번호</InputTilte>
          <SinputInput type="password" placeholder="새 비밀번호" value={newPassword} onChange={onChangeNewPassword} />
          <Explanation>8자~20자, 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합</Explanation>
        </TextWrapper>
        <TextWrapper>
          <InputTilte>새 비밀번호 확인</InputTilte>
          <SinputInput
            type="password"
            placeholder="새 비밀번호 확인"
            value={newPasswordConfirm}
            onChange={onChangeNewPasswordConfirm}
          />
          <Explanation>위와 동일하게 입력해주세요</Explanation>
        </TextWrapper>

        <br />
        <br />

        <TextWrapper>
          <UserInfoText>
            <span>회원가입일:</span>
            <div>{me?.user?.createdAt.slice(0, 10).replace('-', '년 ').replace('-', '월 ')}일</div>
          </UserInfoText>
        </TextWrapper>
        <TextWrapper>
          <UserInfoText>
            <span>마지막수정:</span>
            <div>{me?.user?.updatedAt.slice(0, 10).replace('-', '년 ').replace('-', '월 ')}일</div>
          </UserInfoText>
        </TextWrapper>

        <UpdateBottomLine>
          <UpdateButton type="submit">정보수정</UpdateButton>
          <UpdateButton type="button" onClick={onClickGoBack}>
            취소
          </UpdateButton>
        </UpdateBottomLine>
      </UpdateWrapper>
    </AppLayout>
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

export default MyPage;

// const dispatch = {
//   nickname: "고윤혁",
//   phoneNum: "01012341234",
//   adress: "남양주시 다산동",
//   password: "123",
//   newPassword: "123",
//   newPasswordCornfirm: "123"
// }
