import React, { useContext } from "react";
import { AppContext } from "../Context";

import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <>
      <h1>Esto es User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </>
  );
};
