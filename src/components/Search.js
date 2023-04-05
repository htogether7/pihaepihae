import React, { memo, useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { stateContext } from '../context/StateProvider';
const { kakao } = window;
const Search = () => {
  const {
    searchValue,
    setSearchValue,
    checkRightSearch,
    setCheckRightSearch,
    setSearchAddress,
    setCheckRightAddress,
    searchAddress,
  } = useContext(stateContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(searchValue, (result, status) => {
      if (status !== kakao.maps.services.Status.OK) {
        setCheckRightSearch(false);
      } else {
        setSearchAddress(searchValue);
        setCheckRightAddress(true);
        setCheckRightSearch(true);
        localStorage.setItem('y', result[0].y);
        localStorage.setItem('x', result[0].y);
        localStorage.setItem('address', searchValue);

        navigate(`/result/${result[0].y},${result[0].x}`);
      }
    });
  };
  return (
    <>
      <form>
        <AddressInput onChange={handleChange} />
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </form>
      {!checkRightSearch && <div>주소를 다시 입력해주세요</div>}
    </>
  );
};

const AddressInput = styled.input`
  ${(props) =>
    !props.checkRightAddress
      ? css`
          width: 500px;
          height: 50px;
          margin-top: 20%;
          font-size: 30px;
          text-align: center;
        `
      : css`
          width: 300px;
          height: 30px;
          font-size: 20px;
          text-align: left;
        `}
`;

const SubmitButton = styled.button`
  ${(props) =>
    !props.checkRightAddress
      ? css`
          height: 50px;
          width: 50px;
          font-size: 15px;
        `
      : css`
          height: 30px;
          width: 50px;
          font-size: 15px;
        `}
`;

export default memo(Search);
