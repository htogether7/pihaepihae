import React, { memo, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { stateContext } from '../context/StateProvider';

const Info = () => {
  const { setDamagePrediction, detailAddress, prediction, damagePrediction } =
    useContext(stateContext);

  useEffect(() => {
    setDamagePrediction(prediction);
  });

  if (detailAddress) {
    return (
      <InfoText>
        <div style={{ fontSize: '30px', marginBottom: '30px' }}>
          {detailAddress}
        </div>
        <div>침수 예상 : {damagePrediction}</div>
      </InfoText>
    );
  }
};

const InfoText = styled.div`
  margin-top: 30px;
`;

export default memo(Info);
