import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderSpace from "./components/Utils/HeaderSpace";

function App() {
  return (
    <div className="App font-mrgvlovani">
      <Header></Header>
      <HeaderSpace></HeaderSpace>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
