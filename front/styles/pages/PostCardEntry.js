import styled from 'styled-components';

export const PostCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  a {
    text-decoration: none;
    color: #999999;

    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
  }
`;
