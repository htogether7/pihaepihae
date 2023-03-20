import React, { memo, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { stateContext } from '../context/StateProvider';
// import axios from "axios";
// import { resolvePath } from "react-router-dom";

const { kakao } = window;
const CORS_ANYWHERE_ADDRESS = 'https://cors-anywhere.herokuapp.com/';

const Map = () => {
  const navigate = useNavigate();
  const {
    setSearchAddress,
    setDetailAddress,
    searchAddress,
    setCenterPosition,
    setPrediction,
    centerBoard,
    centerPosition,
    setCenterBoard,
  } = useContext(stateContext);
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
      draggable: false,
      disableDoubleClickZoom: false,
    };
    const map = new kakao.maps.Map(container, options);

    kakao.maps.event.addListener(map, 'click', (e) => {
      const latlng = e.latLng;
      const geocoder = new kakao.maps.services.Geocoder();
      const coords = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
      geocoder.coord2Address(
        coords.getLng(),
        coords.getLat(),
        (result, status) => {
          if (result[0].road_address) {
            setSearchAddress(result[0].road_address.address_name);
            setDetailAddress(result[0].road_address.address_name);
            console.log('도로명!', result[0].road_address.address_name);
          } else {
            setSearchAddress(result[0].address.address_name);
            setDetailAddress(result[0].address.address_name);
            console.log('구주소!', result[0].address.address_name);
          }
        },
      );
      geocoder.addressSearch(searchAddress, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          navigate(`/result/${result[0].y},${result[0].x}`);
        }
      });
    });

    if (searchAddress) {
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(searchAddress, (result, status) => {
        // 정상적으로 검색이 완료됐으면
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        setCenterPosition([result[0].y, result[0].x]);
        map.setCenter(coords);
        const distances = [-0.001, 0, 0.001];

        const locationsSum = [];

        if (result[0].road_address) {
          setDetailAddress(result[0].road_address.address_name);
          console.log('도로명!', result[0].road_address.address_name);
        } else {
          setDetailAddress(result[0].address.address_name);
          console.log('구주소!', result[0].address.address_name);
        }

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            locationsSum.push(
              `${+centerPosition[0] + distances[row]},${
                +centerPosition[1] + distances[col]
              }`,
            );
          }
        }

        const request = async () => {
          await fetch(
            `https://api.open-elevation.com/api/v1/lookup?locations=${locationsSum.join(
              '|',
            )}`,
          )
            .then((res) => res.json())
            .then((data) => {
              setCenterBoard(data.results.map((x) => x.elevation));
            })
            .catch((e) => console.log(e));
        };
        request();
      });
    }
  }, [searchAddress]);

  useEffect(() => {
    if (centerBoard) {
      const centerHeight = centerBoard[4];
      const inclinationBoard = Array.from({ length: 3 }, () => new Array(3));
      for (let i = 0; i < 9; i++) {
        inclinationBoard[parseInt(i / 3)][i % 3] =
          centerBoard[i] - centerHeight;
      }
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
        setPrediction('매우 안전합니다.');
      } else if (valleyCount === 1) {
        setPrediction('안전합니다');
      } else if (valleyCount === 2) {
        setPrediction('비교적 안전합니다.');
      } else if (valleyCount === 3) {
        setPrediction('폭우 시 대비가 필요합니다.');
      } else if (valleyCount === 4) {
        setPrediction('완벽한 골짜기 지형입니다. 대비가 필요합니다.');
      }
    }
  }, [centerBoard, setPrediction]);

  return (
    <div
      id="map"
      style={{ width: '500px', height: '500px', marginTop: '20%' }}
    ></div>
  );
};

export default memo(Map);
