import React, { useContext } from "react";
import { AppContext } from "../Context";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  return (
    <>
      <form onSubmit={activateAuth}>
        <button>Iniciar Sesión</button>
      </form>
    </>
  );
};
