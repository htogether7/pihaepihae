import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapContainer from "./components/MapContainer";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import { useState } from "react";

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
  const [pageIndex, setPageIndex] = useState("/");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainPage
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
              />
            }
          ></Route>
          <Route
            path="result"
            element={
              <ResultPage
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
