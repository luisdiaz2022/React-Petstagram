import React, { useContext } from "react";

import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  const {
    registerMutation,
    registerMutationData,
    registerMutationLoading,
    registerMutationError,
  } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(activateAuth);
  };

  const errorMsg =
    registerMutationError && "El usuario ya existe o hay algun problema.";

  return (
    <>
      <UserForm
        disabled={registerMutationLoading}
        error={errorMsg}
        title="Registrarse"
        onSubmit={onSubmit}
      />
      <UserForm title="Iniciar sesion" onSubmit={onSubmit} />
    </>
  );
};
