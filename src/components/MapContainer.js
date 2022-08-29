import React, { useEffect, useState } from "react";
import Info from "./Info";
import Map from "./Map";
import Search from "./Search";

const MapContainer = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const [prediction, setPrediction] = useState("");
  const [centerPosition, setCenterPosition] = useState([33.450701, 126.570667]);
  const [centerBoard, setCenterBoard] = useState([]);
  return (
    <>
      <Search setSearchAddress={setSearchAddress} />
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

export default MapContainer;
