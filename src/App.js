import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { detailPath } from "./utils";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get(`${detailPath}`);
  console.log(detailId);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <h1>Detail Id: {detailId}</h1>
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </div>
  );
};
