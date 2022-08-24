import React, { useEffect, useState } from "react";
import Info from "./Info";
import Map from "./Map";
import Search from "./Search";

const MapContainer = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const [height, setHeight] = useState("");
  const [centerPosition, setCenterPosition] = useState([33.450701, 126.570667]);
  return (
    <>
      <Search setSearchAddress={setSearchAddress} />
      <Map
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        height={height}
        setHeight={setHeight}
        centerPosition={centerPosition}
        setCenterPosition={setCenterPosition}
      />
      <Info searchAddress={searchAddress} height={height} />
    </>
  );
};

export default MapContainer;
