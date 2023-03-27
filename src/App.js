import React, { useContext, Suspense } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./Context";

import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NotFound } from "./pages/NotFound";

//const Favs = React.lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<Home />} />
          <Route path={`/detail/:detailId`} element={<Detail />} />
          <Route
            path={`/favs`}
            element={isAuth ? <Favs /> : <Navigate replace to="/login" />}
          />
          <Route
            path={`/user`}
            element={isAuth ? <User /> : <Navigate replace to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={
              !isAuth ? <NotRegisteredUser /> : <Navigate replace to="/" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  );
};
