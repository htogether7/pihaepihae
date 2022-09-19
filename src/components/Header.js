import React, { memo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const Header = ({
  checkRightAddress,
  setCheckRightAddress,
  setSearchAddress,
}) => {
  const location = useLocation();
  const locationArray = location.pathname.split("/");
  useEffect(() => {
    if (locationArray.length === 3) {
      setCheckRightAddress(true);
    }
  }, [locationArray.length, setCheckRightAddress]);

  return (
    <HeaderDiv checkRightAddress={checkRightAddress}>
      <Link
        to="/"
        onClick={() => {
          setCheckRightAddress(false);
          setSearchAddress("");
        }}
        style={{ textDecoration: "none", color: "black" }}
        // position={checkRightAddress ? }
      >
        <h1
          style={{
            fontSize: `${checkRightAddress ? "20px" : "50px"}`,
            display: `${checkRightAddress ? "inline-block" : ""}`,
          }}
        >
          피해피해
        </h1>
      </Link>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  ${(props) =>
    props.checkRightAddress &&
    css`
      width: 100%;
      position: relative;
      text-align: left;
      padding-left: 10px;
      /* margin-left: 10px; */
    `};
  ${(props) =>
    !props.checkRightAddress &&
    css`
      position: static;
      margin-top: 20%;
    `}
`;
export default memo(Header);
