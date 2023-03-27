import React from "react";
import { useParams } from "react-router-dom";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Layout } from "../components/Layout";

const HomePage = () => {
  const params = useParams();
  return (
    <Layout
      title="Tu app de fotos de mascotas!"
      subtitle="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
