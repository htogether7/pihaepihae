import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapContainer from "./components/MapContainer";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const [searchAddress, setSearchAddress] = useState("");
  const [searchValue, setSearchValue] = useState("");
  return (
    <FlexDiv className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
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
              />
            }
          ></Route>
        </Route>
      </Routes>
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export default App;
