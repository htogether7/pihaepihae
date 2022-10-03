# 피해피해

침수피해를 예측하고 친구에게 공유합니다.

## 핵심기능

- 주소 검색

  ![image](https://user-images.githubusercontent.com/99343081/193583232-1b56c290-6ea6-467a-9c6e-baedd94fbf6c.png)

  주소(도로명, 구주소)를 검색하면, 카카오맵 api의 Geocoder 객체를 생성해 addressSearch라는 메서드를 사용하여
  좌표를 얻어낸다.

  좌표에 위치한 지역을 맵 중앙에 보여준다.

- 침수 피해 예측

  ![image](https://user-images.githubusercontent.com/99343081/193583418-18777650-0549-45b5-8e4b-b1b22ccb256e.png)

  open-elevation api를 활용해 좌표와 그 주변의 고도를 구한다.
  좌표와 그 주변의 고도를 통해 골짜기 지형이 몇개 형성되어 있는지에 따라 침수 피해 위험도를 계산한다. (이 계산 방식은 추후에 수정 예정)
  지역의 주소와 함께 침수 피해 위험도를 표시한다.

- 카카오톡으로 공유

  ![image](https://user-images.githubusercontent.com/99343081/193583874-4b8b5319-d2f1-4bbe-bb44-c2b71bd1fa33.png)

  카카오톡 공유 api를 활용해 카카오톡 친구에게 링크를 보낼 수 있게한다.

## 기술

- 카카오맵 api
- 카카오 공유 api
- open-elevation api
- React
- styled-component
- 배포 : github pages
