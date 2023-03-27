import React, { useContext } from "react";
import { AppContext } from "../Context";

import { SubmitButton } from "../components/SubmitButton";
import { Layout } from "../components/Layout";

export const User = () => {
  const { removeAuth } = useContext(AppContext);
  return (
    <Layout title="Usuario" subtitle="Aqui podras registrate o loguearte">
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </Layout>
  );
};
