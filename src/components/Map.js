import React, { useEffect } from "react";

const { kakao } = window;
const Map = ({ searchAddress }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // console.log(searchAddress);
    if (searchAddress) {
      const geocoder = new kakao.maps.services.Geocoder();
      // console.log(searchAddress);
      geocoder.addressSearch(searchAddress, (result, status) => {
        // 정상적으로 검색이 완료됐으면
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords);
      });
    }

    console.log(searchAddress);
  }, [searchAddress]);
  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
};
// console.log(process.env.REACT_APP_MAP_CLIENT_ID);
export default Map;
