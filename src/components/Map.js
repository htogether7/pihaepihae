import React from "react";
import { NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";

const Map = () => {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
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
        zoomControl={true} // 지도 zoom 허용
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;
