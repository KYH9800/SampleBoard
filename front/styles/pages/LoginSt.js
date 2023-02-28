import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SignupTilteWord = styled.h1`
  font-size: 26px;
  font-weight: bold;

  padding: 50px 0 15px 0;
  margin: 0;
`;

export const TilteWord = styled.h1`
  font-size: 26px;
  font-weight: bold;

  padding: 50px 0;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 400px;
`;

export const Input = styled.input`
  display: block;

  width: 95%;
  height: 50px;

  padding: 0 10px;
  background-color: #fff;

  border-radius: 8px;
  border: unset;

  font-size: 1em;
  outline: none;
`;

export const KakaoLoginWrapper = styled.div`
  background-color: #fee502;
  text-align: center;

  border-radius: 8px;
  border: unset;

  height: 50px;
`;

export const KakaoLoginBtn = styled.img`
  cursor: pointer;
  width: 320px;
`;

export const BottomButton = styled.div`
  a {
    color: #1b73e8;
    text-decoration: none;
    margin-left: 5px;
  }
`;
