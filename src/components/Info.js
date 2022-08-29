import React, { useEffect, useState } from "react";

const { kakao } = window;

const Info = ({ searchAddress, prediction }) => {
  const [damagePrediction, setDamagePrediction] = useState(0);

  useEffect(() => {
    setDamagePrediction(prediction);
  }, [searchAddress, prediction]);

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
