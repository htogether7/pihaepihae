import React, { memo } from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      By 김시환
      <a href="https://github.com/htogether7/pihaepihae">(깃허브)</a>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  margin-top: auto;
  /* text-align: center; */
`;

export default memo(Footer);
