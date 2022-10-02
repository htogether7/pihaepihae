import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { resolvePath } from "react-router-dom";

const { kakao } = window;
// const CORS_ANYWHERE_ADDRESS = "https://cors-anywhere.herokuapp.com/";

const Map = ({
  searchAddress,
  setSearchAddress,
  prediction,
  setPrediction,
  setCenterPosition,
  centerPosition,
  setCenterBoard,
  centerBoard,
  detailAddress,
  setDetailAddress,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
      draggable: false,
      disableDoubleClickZoom: false,
    };
    const map = new kakao.maps.Map(container, options);

    kakao.maps.event.addListener(map, "click", (e) => {
      const latlng = e.latLng;
      const geocoder = new kakao.maps.services.Geocoder();
      const coords = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
      geocoder.coord2Address(
        coords.getLng(),
        coords.getLat(),
        (result, status) => {
          // console.log("클릭시 결과", result);
          if (result[0].road_address) {
            setSearchAddress(result[0].road_address.address_name);
            setDetailAddress(result[0].road_address.address_name);
            console.log("도로명!", result[0].road_address.address_name);
            // console.log(result[0].road_address);
          } else {
            setSearchAddress(result[0].address.address_name);
            setDetailAddress(result[0].address.address_name);
            console.log("구주소!", result[0].address.address_name);
            // console.log(result[0].address);
          }
        }
      );
      geocoder.addressSearch(searchAddress, (result, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          // console.log(checkRightSearch);

          // console.log(checkRightSearch);

          // console.log(checkRightSearch);
          // setTimeout(() => setCheckRightSearch(false), 100);
          console.log("주소를 다시 입력해주세요");
        } else {
          // console.log("hi");
          console.log("검색 완료");
          // console.log(checkRightSearch);
          navigate(`/result/${result[0].y},${result[0].x}`);
          // console.log(location);
        }
      });
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
        const distances = [-0.001, 0, 0.001];

        const locationsSum = [];

        if (result[0].road_address) {
          setDetailAddress(result[0].road_address.address_name);
          console.log("도로명!", result[0].road_address.address_name);
          // console.log(result[0].road_address);
        } else {
          setDetailAddress(result[0].address.address_name);
          console.log("구주소!", result[0].address.address_name);
          // console.log(result[0].address);
        }

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            locationsSum.push(
              `${+centerPosition[0] + distances[row]},${
                +centerPosition[1] + distances[col]
              }`
            );
          }
        }
        // console.log(locationsSum.join("|"));

        const request = async () => {
          await fetch(
            `https://api.open-elevation.com/api/v1/lookup?locations=${locationsSum.join(
              "|"
            )}`
          )
            // await fetch(
            //   `https://api.open-elevation.com/api/v1/lookup?locations=${centerPosition[0]},${centerPosition[1]}`
            // )
            .then((res) => res.json())
            .then((data) => {
              setCenterBoard(data.results.map((x) => x.elevation));
            })
            .catch((e) => console.log(e));
        };
        request();
      });

      // console.log("address changed");
    }

    // console.log(height_board);
    // console.log(centerPosition);
  }, [searchAddress]);

  useEffect(() => {
    if (centerBoard) {
      // console.log(centerBoard);
      const centerHeight = centerBoard[4];
      const inclinationBoard = Array.from({ length: 3 }, () => new Array(3));
      for (let i = 0; i < 9; i++) {
        inclinationBoard[parseInt(i / 3)][i % 3] =
          centerBoard[i] - centerHeight;
      }
      // console.log(inclinationBoard);
      let valleyCount = 0;
      if (inclinationBoard[0][0] > 0 && inclinationBoard[2][2] > 0) {
        valleyCount++;
      }
      if (inclinationBoard[2][0] > 0 && inclinationBoard[0][2] > 0) {
        valleyCount++;
      }
      if (inclinationBoard[1][0] > 0 && inclinationBoard[1][2] > 0) {
        valleyCount++;
      }
      if (inclinationBoard[0][1] > 0 && inclinationBoard[2][1] > 0) {
        valleyCount++;
      }

      if (valleyCount === 0) {
        setPrediction("매우 안전합니다.");
      } else if (valleyCount === 1) {
        setPrediction("안전합니다");
      } else if (valleyCount === 2) {
        setPrediction("비교적 안전합니다.");
      } else if (valleyCount === 3) {
        setPrediction("폭우 시 대비가 필요합니다.");
      } else if (valleyCount === 4) {
        setPrediction("완벽한 골짜기 지형입니다. 대비가 필요합니다.");
      }

      // setPrediction(centerBoard[8]);
    }
  }, [centerBoard, setPrediction]);

  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
};
// console.log(process.env.REACT_APP_MAP_CLIENT_ID);

export default memo(Map);
