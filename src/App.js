import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { detailPath } from "./utils";
import { Home } from "./pages/Home";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get(`${detailPath}`);

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        {detailId ? (
          <PhotoCardWithQuery id={detailId} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};
