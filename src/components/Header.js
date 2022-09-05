import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <h1 style={{ fontSize: "50px" }}>피해피해</h1>
      </Link>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  margin-top: 20%;
`;
export default Header;
