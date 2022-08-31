import React, { useCallback, useState } from "react";
import Info from "../components/Info";
import Map from "../components/Map";
import MapContainer from "../components/MapContainer";
import Search from "../components/Search";

const ResultPage = ({ searchAddress, setSearchAddress, match }) => {
  // const [searchAddress, setSearchAddress] = useState("");
  const [prediction, setPrediction] = useState("");
  const [centerPosition, setCenterPosition] = useState([33.450701, 126.570667]);
  const [centerBoard, setCenterBoard] = useState([]);

  return (
    <>
      <Search
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        centerPosition={centerPosition}
        setCenterPosition={setCenterPosition}
        setCenterBoard={setCenterBoard}
        centerBoard={centerBoard}
      />
      <Map
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        prediction={prediction}
        setPrediction={setPrediction}
        centerPosition={centerPosition}
        setCenterPosition={setCenterPosition}
        setCenterBoard={setCenterBoard}
        centerBoard={centerBoard}
      />
      <Info searchAddress={searchAddress} prediction={prediction} />
    </>
  );
};

export default ResultPage;
