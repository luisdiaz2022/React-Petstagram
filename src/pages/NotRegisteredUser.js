import React, { useContext } from "react";
import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  return (
    <>
      <UserForm title="Registrarse" onSubmit={activateAuth} />
      <UserForm title="Iniciar sesion" onSubmit={activateAuth} />
    </>
  );
};
