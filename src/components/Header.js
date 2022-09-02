import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <h1 style={{ fontSize: "50px" }}>피해피해</h1>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  margin-top: 20%;
`;
export default Header;
