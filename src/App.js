import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import { memo, useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const { Kakao } = window;
Kakao.init(process.env.REACT_APP_MAP_CLIENT_ID);

// const Layout = memo(({ checkRightAddress }) => {
//   return (
//     <>
//       <Outlet />
//       <Footer />
//     </>
//   );
// });

function App() {
  const [searchAddress, setSearchAddress] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [checkRightAddress, setCheckRightAddress] = useState(false);
  return (
    <FlexDiv checkRightAddress={checkRightAddress} className="App">
      <GlobalStyle />
      <Header
        setSearchValue={setSearchValue}
        checkRightAddress={checkRightAddress}
        setCheckRightAddress={setCheckRightAddress}
      />
      <Routes>
        <Route
          index
          element={
            <MainPage
              searchAddress={searchAddress}
              setSearchAddress={setSearchAddress}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              checkRightAddress={checkRightAddress}
              setCheckRightAddress={setCheckRightAddress}
            />
          }
        ></Route>
        <Route
          path="result/:address"
          element={
            <ResultPage
              searchAddress={searchAddress}
              setSearchAddress={setSearchAddress}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              checkRightAddress={checkRightAddress}
              setCheckRightAddress={setCheckRightAddress}
            />
          }
        ></Route>
        {/* <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                checkRightAddress={checkRightAddress}
                setCheckRightAddress={setCheckRightAddress}
              />
            }
          ></Route>
          <Route
            path="result/:address"
            element={
              <ResultPage
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                checkRightAddress={checkRightAddress}
                setCheckRightAddress={setCheckRightAddress}
              />
            }
          ></Route>
        </Route> */}
      </Routes>
      <Footer />
    </FlexDiv>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    height:100%
  }
  body {
    height: 100%
  }
  #root {
    height: 50%
  }

  *{
    font-family: 'Jua', sans-serif;
    font-family: 'Nanum Gothic', sans-serif;
    }
`;

const FlexDiv = styled.div`
  ${(props) =>
    !props.checkRightAddress &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
      width: 100%;
    `}/* ${(props) => props.checkRightAddress && css``} */
`;

export default App;
