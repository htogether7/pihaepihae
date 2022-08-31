import React from "react";
import Search from "../components/Search";

const { kakao } = window;

const MainPage = ({ searchAddress, setSearchAddress }) => {
  return (
    <Search searchAddress={searchAddress} setSearchAddress={setSearchAddress} />
  );
};

export default MainPage;
