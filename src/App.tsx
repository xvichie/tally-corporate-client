import "./App.css";

import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderSpace from "./components/Utils/HeaderSpace";
import ScrollToTop from "./components/Utils/ScrollToTop";
import TallyTemplate from "./components/TallyTemplate";

function App() {
  return (
      <div className="App font-mrgvlovani">
        <ScrollToTop />
        <TallyTemplate></TallyTemplate>
        <Header></Header>
        <HeaderSpace></HeaderSpace>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  );
}

export default App;
