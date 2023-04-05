import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Info from '../components/Info';
import Map from '../components/Map';
import Search from '../components/Search';
import ShareContainer from '../components/ShareContainer';
import { stateContext } from '../context/StateProvider';
const ResultPage = () => {
  const {
    searchValue,
    setCheckRightSearch,
    setSearchAddress,
    setCheckRightAddress,
  } = useContext(stateContext);

  useEffect(() => {
    if (localStorage.getItem('x')) {
      console.log('x가 있음');
      setSearchAddress(localStorage.getItem('address'));
      setCheckRightAddress(true);
      setCheckRightSearch(true);
    }
  });
  return (
    <>
      <FlexContentsContainer>
        <Map />

        <InfoContainer>
          <Search />

          <Info />
          <ShareContainer />
        </InfoContainer>
      </FlexContentsContainer>
    </>
  );
};

const FlexContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const InfoContainer = styled.div`
  margin-left: 50px;
`;

export default ResultPage;
