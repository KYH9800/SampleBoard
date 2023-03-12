import styled from 'styled-components';
// import { LogoImg } from '../../styles/components/Navbar/MainNavbarSt';
/**************<게시글 생성 페이지 상단 바>*****************
 * <LogoWrapper>
 *    <a onClick={onClickLogo}>
 *      <LogoImg src="/images/sample_logo.jpeg" />
 *    </a>
 *  </LogoWrapper>
 ****************************************************/

// 게시글 생성 페이지 상단 바 with 로고 (현재 사용 X)
export const LogoWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;

  width: 100%;

  background-color: #fff;
  margin: auto;

  border-bottom: 1px solid #ebebeb;

  a {
    display: block;
    width: 96%;
    margin: auto;
  }

  img {
    margin-top: 6px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin: 0px auto 0 auto;
  /* margin: 100px auto 0 auto; */
  /* width: 1000px; */

  border-radius: 3px;

  background-color: #fff;
  padding: 10px 0;
`;

export const PageTilte = styled.h2`
  width: 95%;
  margin: 20px auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 94.7%;
  margin: auto;

  background-color: #fff;

  border: 1px solid gray;
`;

export const PostTitleInput = styled.input`
  display: block;

  padding: 0 9px;

  outline: none;
  border: 0;

  width: 98%;
  height: 26px;

  font-size: 15px;
`;

export const Select = styled.select`
  cursor: pointer;
  outline: none;

  height: 31px;
  /* appearance: none; */

  border: 0;

  padding: 0 10px;

  color: black;

  background-color: #d7d7d7;
  box-sizing: border-box;

  font-size: 15px;

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }

  :hover {
    background-color: #bdbdbd;
  }
`;

export const EditorWrapper = styled.div`
  /* max-width: 1000px; */
  width: 95%;
  margin: auto;

  h2 {
    margin: 5px 0;
  }

  .ck-editor__editable_inline {
    /* height: 50vh; */
    /* height: 60vh; */
    height: 87.6vh;
  }

  .ck-editor__editable_inline {
    p {
      font-size: 15px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: 40px;
  /* width: 100%; */

  box-sizing: border-box;

  font-size: 1em;
  color: #fff;
  background-color: #697183;

  border: 0;
  border-radius: 8px;

  margin: 0;
  padding: 0 20px;

  :hover {
    background-color: #535864;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;

  width: 95%;
`;
