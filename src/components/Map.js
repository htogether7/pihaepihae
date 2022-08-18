import React from "react";
// import { NaverMap } from 'react-naver-maps';
import { NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";

// var mapOptions = {
//   center: new naver.maps.LatLng(37.3595704, 127.105399),
//   zoom: 10,
// };
// var map = new naver.maps.Map("map", mapOptions);
// const Map = () => {
//   return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
// };

// const drawMap = () => {
//   let map = new naver.maps.Map("map", {
//     center: new naver.maps.LatLng(37.3595704, 127.105399),
//     zoom: 10,
//   });
// };
const Map = () => {
  //   console.dir(NaverMap);
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
      submodules={["geocoder"]}
    >
      <NaverMap
        id="map"
        mapDivId="react-naver-map"
        style={{
          width: "70%",
          height: "400px",
        }}
        defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
        defaultZoom={16}
        zoomControl={false} // 지도 zoom 허용
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
