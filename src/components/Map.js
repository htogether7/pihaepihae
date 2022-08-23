import React, { useEffect, useState } from "react";
// import axios from "axios";

const { kakao } = window;
const Map = ({ searchAddress }) => {
  // const [height, setHeight] = useState("first");

  // console.log(height);
  // fetch(
  //
  // )
  //   .then((response) => console.log(response))
  //   .catch((e) => console.log(e));
  // console.log(process.env.REACT_APP_MAP_CLIENT_ID_GOOGLE);

  useEffect(() => {
    // console.log(height);
    // const promise = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=${process.env.REACT_APP_MAP_CLIENT_ID_GOOGLE}&sensor=false`
    //     );
    //     // .then((res) => {
    //     //   setHeight(res);
    //     //   console.log("hi");
    //     // });
    //     console.log("hey");
    //   } catch (e) {
    //     alert(e);
    //   }
    // console.log(response);
    // };
    // console.log(promise);
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
    // console.log(searchAddress);
    kakao.maps.event.addListener(map, "click", (e) => {
      const latlng = e.latLng;
      const coords = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
      console.log(coords);
      // map.setCenter(coords);
    });
    if (searchAddress) {
      const geocoder = new kakao.maps.services.Geocoder();
      // console.log(searchAddress);
      geocoder.addressSearch(searchAddress, (result, status) => {
        // 정상적으로 검색이 완료됐으면
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords);
      });
    }

    // console.log(searchAddress);
  }, [searchAddress]);
  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
};
// console.log(process.env.REACT_APP_MAP_CLIENT_ID);
export default Map;
