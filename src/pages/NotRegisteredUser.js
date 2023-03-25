import React, { useContext } from "react";

import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext);
  const {
    registerMutation,
    registerMutationData,
    registerMutationLoading,
    registerMutationError,
  } = useRegisterMutation();

  const {
    loginMutation,
    loginMutationData,
    loginMutationLoading,
    loginMutationError,
  } = useLoginMutation();

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(activateAuth);
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    loginMutation({ variables: variable }).then(activateAuth);
  };

  const errorMsgRegister =
    registerMutationError && "El usuario ya existe o hay algun problema.";

  const errorMsgLogin =
    loginMutationError && "Usuario o contraseña incorrecta.";

  return (
    <>
      <UserForm
        disabled={registerMutationLoading}
        error={errorMsgRegister}
        title="Registrarse"
        onSubmit={onSubmitRegister}
      />
      <UserForm
        disabled={loginMutationLoading}
        error={errorMsgLogin}
        title="Iniciar sesion"
        onSubmit={onSubmitLogin}
      />
    </>
  );
};
