import styled from 'styled-components';

export const TitleContainer = styled.section`
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;

  font-size: 1.5em;
  color: #000;
  background-color: #fff;

  margin: 0;
  padding: 15px 20px;

  border-radius: 12px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
  box-sizing: border-box;
`;

export const BoarderList = styled.section`
  width: 100%;
  font-size: 1em;
  background-color: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 2px 30px 0 rgb(0 0 0 / 6%);
  box-sizing: border-box;
`;

// search form
export const SearchForm = styled.form`
  display: flex;
  justify-content: end;
`;

// section
export const Section = styled.select`
  cursor: pointer;

  height: 40px;
  appearance: none;

  border-radius: 8px;
  border: 0;

  padding: 0 20px;

  font-size: 1em;
  color: #fff;

  background-color: #cacfd8;
  box-sizing: border-box;

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
`;

// search Input
export const SearchInput = styled.input`
  outline: none;
  font-size: 1em;

  width: 230px;
  height: 40px;

  flex: 1;

  margin: 0;
  box-sizing: border-box;

  border: 0;
  border-radius: 8px;

  margin: 0 14px;
  padding: 0 16px;
`;

// search button
export const SearchButton = styled.button`
  cursor: pointer;
  height: 40px;
  box-sizing: border-box;
  color: #fff;
  background-color: #cacfd8;
  border: 0;
  margin: 0;
  padding: 0 20px;
  font-size: 1em;
  border-radius: 8px;
`;
