import React from "react";
import { useQuery } from "@apollo/client";
import { PhotoCard } from "../PhotoCard";
import { ANIMALS_QUERY } from "../../hoc/ANIMALS_QUERY";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(ANIMALS_QUERY, {
    variables: { categoryId },
  });
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
