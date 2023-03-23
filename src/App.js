import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { detailPath } from "./utils";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

export const App = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get(`${detailPath}`);

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path={`/detail/:detailId`} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
