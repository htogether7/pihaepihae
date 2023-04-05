import React, { memo, useContext } from 'react';
import Search from '../components/Search';
import { stateContext } from '../context/StateProvider';

const MainPage = () => {
  const { searchCount, checkRightAddress } = useContext(stateContext);

  const AddressErrorSign = () => {
    return <h2>주소를 다시 입력해주세요.</h2>;
  };
  return (
    <>
      <Search />
      {searchCount !== 0 && !checkRightAddress && <AddressErrorSign />}
    </>
  );
};

export default memo(MainPage);
