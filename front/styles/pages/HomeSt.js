import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 1280px;
`;

export const BoxWrapper = styled.div`
  /* 1280px 반응형 설정 */
  /* flex-direction: column; */
  display: flex;
  gap: 20px;
`;

export const BottomBannerImg = styled.img`
  border-radius: 12px;
  width: 100%;
`;

// Home Item Box Styles
export const HomeItemBox = styled.div`
  width: 390px;
  padding: 25px;

  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
`;

// Home Item Box 제목
export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
  }

  div {
    font-size: 14px;
  }

  a {
    color: #222;
    text-decoration: none;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
