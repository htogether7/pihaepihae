import React, { createContext, useState } from 'react';

export const stateContext = createContext();

const StateProvider = ({ children }) => {
  const [searchAddress, setSearchAddress] = useState('');
  const [checkRightAddress, setCheckRightAddress] = useState(false);
  const [damagePrediction, setDamagePrediction] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [checkRightSearch, setCheckRightSearch] = useState(true);
  const [searchCount, setSearchCount] = useState(0);
  const [prediction, setPrediction] = useState('');
  const [centerPosition, setCenterPosition] = useState([33.450701, 126.570667]);
  const [centerBoard, setCenterBoard] = useState([]);
  const [detailAddress, setDetailAddress] = useState('');

  const value = {
    // state: {
    //   searchAddress,
    //   checkRightAddress,
    //   damagePrediction,
    //   searchValue,
    //   checkRightSearch,
    //   searchCount,
    //   prediction,
    //   centerPosition,
    //   centerBoard,
    //   detailAddress,
    // },
    // actions: {
    //   setSearchAddress,
    //   setCheckRightAddress,
    //   setDamagePrediction,
    //   setSearchValue,
    //   setCheckRightSearch,
    //   setSearchCount,
    //   setPrediction,
    //   setCenterPosition,
    //   setCenterBoard,
    //   setDetailAddress,
    // },
    setSearchAddress,
    setCheckRightAddress,
    setDamagePrediction,
    setSearchValue,
    setCheckRightSearch,
    setSearchCount,
    setPrediction,
    setCenterPosition,
    setCenterBoard,
    setDetailAddress,
    searchAddress,
    checkRightAddress,
    damagePrediction,
    searchValue,
    checkRightSearch,
    searchCount,
    prediction,
    centerPosition,
    centerBoard,
    detailAddress,
  };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
};

export default StateProvider;
