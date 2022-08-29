import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MapContainer from "./components/MapContainer";
import { Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";

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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="result" element={<ResultPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
