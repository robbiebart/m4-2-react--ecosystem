import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    flex-grow: 20;
    padding: 20px;
  }

  a {
    flex-grow: 1;
    padding: 10px;
    text-decoration: none;
  }
`;

const Header = (props) => {
  return (
    <Wrapper>
      <h1>Fruit Emporium</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Wrapper>
  );
};

export default Header;
