import styled from 'styled-components';

export const SubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1280px;

  a {
    cursor: pointer;
    padding: 10px;
    color: #000;
    text-decoration: none;
    font-size: 16.9px;
  }
`;

export const ColumnLine = styled.div`
  border-left: thin solid rgba(0, 0, 0, 0.2);

  height: 17px;
  margin-top: 11px;

  width: 3px;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;
