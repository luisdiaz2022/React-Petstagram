import React from "react";
import { PhotoCard } from "../components/PhotoCard";

import { gql, useQuery } from "@apollo/client";

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, { variables: { id: id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};
