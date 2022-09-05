import React, { useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const Info = ({ searchAddress, prediction }) => {
  const [damagePrediction, setDamagePrediction] = useState(0);

  useEffect(() => {
    setDamagePrediction(prediction);
  }, [searchAddress, prediction]);

  if (searchAddress) {
    return (
      <InfoText>
        <div style={{ fontSize: "30px", marginBottom: "30px" }}>
          {searchAddress}
        </div>
        <div>침수 예상 : {damagePrediction}</div>
      </InfoText>
    );
  }
};

const InfoText = styled.div`
  margin-top: 30px;
`;

export default Info;
