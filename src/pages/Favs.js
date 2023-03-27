import React from "react";

import { useGetFavorites } from "../container/GetFavorites";
import { ListOfFavs } from "../components/ListOfFavs";

export const Favs = () => {
  const { data, loading, error } = useGetFavorites();

  if (loading) return "loading...";
  if (error) return "error";
  const { favs } = data;
  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={favs} />
    </>
  );
};
