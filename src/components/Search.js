import React, { useState } from "react";
const { kakao } = window;
const Search = ({ setSearchAddress }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    // console.log(searchValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(searchValue, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        console.log("주소를 다시 입력해주세요");
      } else {
        setSearchAddress(searchValue);
      }
    });
  };
  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>제출</button>
      {/* <input type="submit" onSubmit={handleSubmit} value="제출" /> */}
    </form>
  );
};

export default Search;
