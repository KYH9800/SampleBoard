import styled from 'styled-components';

export const UpdateWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-radius: 12px;

  background-color: #fff;
  padding: 1.5rem;

  h1 {
    margin-left: 25px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin-bottom: 5%;
`;

export const ChangeUserImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 140px;
  height: 140px;

  margin-left: 25px;

  object-fit: cover;

  border-radius: 50%;
  border: 1.5px solid #e2e2e2;
`;

export const UpdateBottomLine = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

export const UpdateButton = styled.button`
  cursor: pointer;

  margin-top: 5%;

  font-size: 17px;
  text-align: center;
  line-height: 34px;

  width: 150px;
  height: 34px;

  font-size: 15px;
  border-radius: 7px;

  background-color: #fff;
  border: 1px solid #ebedf3;

  :hover {
    background-color: #ededed;
  }
`;

export const UserInfoText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  span {
    width: 80px;
  }
`;
