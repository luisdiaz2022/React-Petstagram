import React from "react";

import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
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
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </div>
  );
};
