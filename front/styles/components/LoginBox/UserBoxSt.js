import styled from 'styled-components';
import Link from 'next/link';

export const UserBoxWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 100%;

  background-color: #fff;
  border-radius: 12px;
`;

export const UserProfileLine = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  margin: 20px 20px 0 20px;
`;

export const UserImage = styled.img`
  width: 45px;
  height: 45px;

  object-fit: cover;

  border-radius: 50%;
  border: 1.5px solid #e2e2e2;
`;

export const UserNickname = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const UserAuthority = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #9da5b6;
`;

export const UserPostsInfoLine = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  margin: 0 20px;

  span {
    font-size: 15px;
    font-weight: 500;
  }
`;

export const PostCount = styled.span`
  text-decoration: underline;
`;

export const ButtonLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  margin-bottom: 20px;
`;

export const ButtonTopLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: 90%;
`;

export const Button = styled.button`
  cursor: pointer;

  width: 90%;
  height: 37px;

  font-size: 13.5px;
  font-weight: 500;

  background-color: #697183;
  color: #fff;

  border: 1px solid #e2e2e2;
  border-radius: 5px;

  :hover {
    background-color: #434b57;
  }
`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 35px;

  width: 90%;
  height: 35px;

  font-size: 13.5px;
  font-weight: 500;

  background-color: #697183;
  color: #fff;

  border: 1px solid #e2e2e2;
  border-radius: 5px;

  :hover {
    background-color: #434b57;
  }
`;
