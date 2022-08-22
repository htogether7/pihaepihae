import React, { useEffect, useState } from "react";
import Map from "./Map";
import Search from "./Search";

const MapContainer = () => {
  const [searchAddress, setSearchAddress] = useState("");
  return (
    <>
      <Search setSearchAddress={setSearchAddress} />
      <Map searchAddress={searchAddress} />
    </>
  );
};

export default MapContainer;
