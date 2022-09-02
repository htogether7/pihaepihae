import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
const { kakao } = window;
const Search = ({
  setSearchAddress,
  searchAddress,
  centerPosition,
  setCenterPosition,
  centerBoard,
  setCenterBoard,
  searchValue,
  setSearchValue,
  setSearchCount,
  searchCount,
}) => {
  // const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    // console.log(searchValue);
  };

  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location.pathname);
  // useEffect(() => {}, [])
  const locationArray = location.pathname.split("/");
  // console.log(locationArray);
  useEffect(() => {
    if (locationArray.length === 3) {
      const [lat, lng] = locationArray[2].split(",").map((x) => +x);
      // console.log(lat, lng);
      const geocoder = new kakao.maps.services.Geocoder();
      const coords = new kakao.maps.LatLng(lat, lng);
      // setCenterPosition([lat, lng]);
      // map.setCenter(coords);
      // // console.log(coords);
      // // map.setCenter(coords);
      geocoder.coord2Address(
        coords.getLng(),
        coords.getLat(),
        (result, status) => {
          if (result[0].road_address) {
            setSearchAddress(result[0].road_address.address_name);
            // console.log("도로명!");
            // console.log(result[0].road_address);
          } else {
            setSearchAddress(result[0].address.address_name);
            // console.log("구주소!");
            console.log(result[0].address);
          }
        }
      );
    }
  }, [searchAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const geocoder = new kakao.maps.services.Geocoder();
    setSearchCount((prev) => prev + 1);
    // geocoder.addressSearch(searchAddress, (result, status) => {
    //   // 정상적으로 검색이 완료됐으면
    //   var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    //   // console.log(coords);
    //   setCenterPosition([result[0].y, result[0].x]);
    // });

    geocoder.addressSearch(searchValue, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        console.log("주소를 다시 입력해주세요");
      } else {
        setSearchAddress(searchValue);
        navigate(`/result/${result[0].y},${result[0].x}`);
        // console.log(location);
      }
    });
  };
  return (
    <form>
      <AddressInput type="text" onChange={handleChange} />
      <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      {/* <input type="submit" onSubmit={handleSubmit} value="제출" /> */}
    </form>
  );
};

const AddressInput = styled.input`
  /* background-color: black; */
  width: 500px;
  height: 50px;
  margin-top: 20%;
  font-size: 30px;
  text-align: center;
`;

const SubmitButton = styled.button`
  height: 50px;
  width: 50px;
  font-size: 15px;
`;

export default Search;
