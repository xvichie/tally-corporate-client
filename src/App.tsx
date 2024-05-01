import "./App.css";

import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderSpace from "./components/Utils/HeaderSpace";
import ScrollToTop from "./components/Utils/ScrollToTop";

function App() {
  return (
      <div className="App font-mrgvlovani">
        <ScrollToTop />
        <Header></Header>
        <HeaderSpace></HeaderSpace>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  );
}

export default App;
