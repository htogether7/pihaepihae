import React, { useEffect, useState } from "react";
import axios from "axios";

const { kakao } = window;
const Map = ({
  searchAddress,
  setSearchAddress,
  height,
  setHeight,
  setCenterPosition,
  centerPosition,
}) => {
  useEffect(() => {
    // console.log(height);
    // console.log("hey");

    // console.log(response);
    // console.log(promise);
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
      draggable: false,
      disableDoubleClickZoom: false,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition1 = new kakao.maps.LatLng(
      centerPosition[0] - 0.002,
      centerPosition[1] - 0.002
    );
    const marker1 = new kakao.maps.Marker({
      position: markerPosition1,
    });

    marker1.setMap(map);

    const markerPosition2 = new kakao.maps.LatLng(
      centerPosition[0] - 0.002,
      centerPosition[1] + 0.002
    );
    const marker2 = new kakao.maps.Marker({
      position: markerPosition2,
    });

    marker2.setMap(map);

    const markerPosition3 = new kakao.maps.LatLng(
      centerPosition[0] + 0.002,
      centerPosition[1] - 0.002
    );
    const marker3 = new kakao.maps.Marker({
      position: markerPosition3,
    });

    marker3.setMap(map);

    const markerPosition4 = new kakao.maps.LatLng(
      centerPosition[0] + 0.002,
      centerPosition[1] + 0.002
    );
    const marker4 = new kakao.maps.Marker({
      position: markerPosition4,
    });

    marker4.setMap(map);
    // map.setZoomable(false);

    // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
    // console.log(searchAddress);
    kakao.maps.event.addListener(map, "click", (e) => {
      const latlng = e.latLng;
      const geocoder = new kakao.maps.services.Geocoder();
      const coords = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
      setCenterPosition([latlng.getLat(), latlng.getLng()]);
      map.setCenter(coords);
      console.log(coords);
      // map.setCenter(coords);
      geocoder.coord2Address(
        coords.getLng(),
        coords.getLat(),
        (result, status) => {
          if (result[0].road_address) {
            setSearchAddress(result[0].road_address.address_name);
            // console.log("도로명!");
            console.log(result[0].road_address);
          } else {
            setSearchAddress(result[0].address.address_name);
            // console.log("구주소!");
            console.log(result[0].address);
          }
        }
      );
    });
    if (searchAddress) {
      const geocoder = new kakao.maps.services.Geocoder();
      // console.log(searchAddress);
      geocoder.addressSearch(searchAddress, (result, status) => {
        // 정상적으로 검색이 완료됐으면
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // console.log(coords);
        setCenterPosition([result[0].y, result[0].x]);
        map.setCenter(coords);

        const response = async () => {
          try {
            await axios
              .get(
                `https://api.open-elevation.com/api/v1/lookup?locations=${coords.getLat()},${coords.getLng()}`
              )
              .then((res) => {
                setHeight(res.data.results[0].elevation);
                // console.log(height);
              });
          } catch (e) {
            console.log(e);
          }
        };
        response();
      });

      // console.log("address changed");
    }

    // console.log(searchAddress);
  }, [searchAddress]);

  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
};
// console.log(process.env.REACT_APP_MAP_CLIENT_ID);
export default Map;
