import React, { memo, useState } from "react";
import Search from "../components/Search";

const { kakao } = window;

const MainPage = ({
  searchAddress,
  setSearchAddress,
  searchValue,
  setSearchValue,
  checkRightAddress,
  setCheckRightAddress,
}) => {
  const [searchCount, setSearchCount] = useState(0);
  const AddressErrorSign = () => {
    return <h2>주소를 다시 입력해주세요.</h2>;
  };
  return (
    <>
      <Search
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchCount={searchCount}
        setSearchCount={setSearchCount}
        checkRightAddress={checkRightAddress}
        setCheckRightAddress={setCheckRightAddress}
      />

      {searchCount !== 0 && !checkRightAddress && <AddressErrorSign />}
    </>
  );
};

export default memo(MainPage);
