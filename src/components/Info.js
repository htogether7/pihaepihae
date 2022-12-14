import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

const { kakao } = window;

const Info = ({ detailAddress, prediction }) => {
  const [damagePrediction, setDamagePrediction] = useState(0);

  useEffect(() => {
    setDamagePrediction(prediction);
  }, [detailAddress, prediction]);

  if (detailAddress) {
    return (
      <InfoText>
        <div style={{ fontSize: "30px", marginBottom: "30px" }}>
          {detailAddress}
        </div>
        <div>μΉ¨μ μμ : {damagePrediction}</div>
      </InfoText>
    );
  }
};

const InfoText = styled.div`
  margin-top: 30px;
`;

export default memo(Info);
