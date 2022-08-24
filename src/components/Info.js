import React, { useEffect, useState } from "react";

const { kakao } = window;

const Info = ({ searchAddress, height }) => {
  const [damagePrediction, setDamagePrediction] = useState(0);

  useEffect(() => {
    setDamagePrediction(height);
  }, [searchAddress, height]);

  if (searchAddress) {
    return (
      <div>
        <h1>{searchAddress}</h1>
        <h1>침수 예상 : {damagePrediction}</h1>
      </div>
    );
  }
};

export default Info;
