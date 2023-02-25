import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1280px;
  margin: auto;

  background-color: #888;
`;

export const CustomUl = styled.ul`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);

  text-align: center;

  margin: 0;
  padding: 0;

  p {
    margin: 0;
    color: #fff;
  }

  a {
    display: block;
    width: 320px;
    padding: 17.5px 0;

    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
  }

  :hover {
    a {
      color: #00ffa8;
    }
    background-color: #222c;
  }
`;

export const Community = styled.p`
  .more {
    display: none;
  }
  :hover {
    .more {
      display: block;
    }
  }
`;

export const CommunityUl = styled.ul`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);

  text-align: center;

  margin: 0;
  padding: 0;

  p {
    margin: 0;
    color: #fff;
  }

  a {
    display: block;
    width: 320px;
    padding: 17.5px 0;

    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
  }

  :hover {
    a {
      color: #00ffa8;
    }
    background-color: #222c;

    .more {
      display: block;
    }
  }
`;

export const MoreComunity = styled.div`
  position: absolute;
  top: 60px;

  display: none;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);

  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);

  text-align: center;

  margin: 0;

  width: 320px;
`;

export const MoreCustomUl = styled.ul`
  cursor: pointer;
  background-color: #fff;

  text-align: center;

  margin: 0;
  padding: 0;

  border-bottom: 1px solid #eee;

  p {
    margin: 0;
    color: black;
  }

  a {
    display: block;
    width: 320px;
    padding: 17.5px 0;

    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
  }

  :hover {
    background-color: #f1f1f1;
    a {
      color: #00ffa8;
    }
  }
`;
