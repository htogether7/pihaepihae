import React from 'react';
import styled from 'styled-components';
import Info from '../components/Info';
import Map from '../components/Map';
import Search from '../components/Search';
import ShareContainer from '../components/ShareContainer';
const ResultPage = () => {
  // const [searchAddress, setSearchAddress] = useState("");
  // const [prediction, setPrediction] = useState('');
  // const [centerPosition, setCenterPosition] = useState([33.450701, 126.570667]);
  // const [centerBoard, setCenterBoard] = useState([]);
  // const [detailAddress, setDetailAddress] = useState('');

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
