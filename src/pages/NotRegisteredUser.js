import React, { useContext } from "react";

import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  const { registerMutation } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(activateAuth);
  };

  return (
    <>
      <UserForm title="Registrarse" onSubmit={onSubmit} />
      <UserForm title="Iniciar sesion" onSubmit={onSubmit} />
    </>
  );
};
