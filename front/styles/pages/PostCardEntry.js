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
    padding-bottom: 9px;

    background-color: #fff;
    box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
  }
`;

/*************************
 * PostCardEntry
 *************************/
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  padding-bottom: 78.43%;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const PostInfo = styled.div`
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 10px;

  font-weight: 500;
`;

export const PostImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ImageEtc = styled.div`
  display: flex;
  align-items: center;

  color: #9da5b6;

  font-size: 13.5px;
`;
