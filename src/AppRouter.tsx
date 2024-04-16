import React, { useState } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./screens/Home/Home";
import Services from "./screens/Services/Services";
import Projects from "./screens/Projects/Projects";
import AboutUs from "./screens/AboutUs/AboutUs";


function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Home />}></Route>
        <Route index={true} path="/services" element={<Services />}></Route>
        <Route index={true} path="/projects" element={<Projects />}></Route>
        <Route index={true} path="/about" element={<AboutUs />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
