import React from "react";

import { useGetFavorites } from "../container/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

export const Favs = () => {
  const { data, loading, error } = useGetFavorites();

  if (loading) return "loading...";
  if (error) return "error";
  const { favs } = data;
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <ListOfFavs favs={favs} />
    </Layout>
  );
};
