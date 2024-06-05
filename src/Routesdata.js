import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Page from "./Page";

const Routespath = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="page" element={<Page />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Routespath;
