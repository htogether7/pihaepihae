import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Info from "../components/Info";
import Map from "../components/Map";
import Search from "../components/Search";
import ShareContainer from "../components/ShareContainer";

const ResultPage = ({
  searchAddress,
  setSearchAddress,
  match,
  setSearchValue,
  searchValue,
  checkRightAddress,
  setCheckRightAddress,
}) => {
  // const [searchAddress, setSearchAddress] = useState("");
  const [prediction, setPrediction] = useState("");
  const [centerPosition, setCenterPosition] = useState([33.450701, 126.570667]);
  const [centerBoard, setCenterBoard] = useState([]);

  return (
    <>
      <FlexContentsContainer>
        <Map
          searchAddress={searchAddress}
          setSearchAddress={setSearchAddress}
          prediction={prediction}
          setPrediction={setPrediction}
          centerPosition={centerPosition}
          setCenterPosition={setCenterPosition}
          setCenterBoard={setCenterBoard}
          centerBoard={centerBoard}
          setSearchValue={setSearchValue}
        />

        <InfoContainer checkRightAddress={checkRightAddress}>
          <Search
            searchAddress={searchAddress}
            setSearchAddress={setSearchAddress}
            centerPosition={centerPosition}
            setCenterPosition={setCenterPosition}
            setCenterBoard={setCenterBoard}
            centerBoard={centerBoard}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setCheckRightAddress={setCheckRightAddress}
            checkRightAddress={checkRightAddress}
          />

          <Info searchAddress={searchAddress} prediction={prediction} />
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
