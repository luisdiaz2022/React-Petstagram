import React from "react";
import { useParams } from "react-router-dom";

import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

export const Detail = () => {
  const params = useParams();
  return (
    <Layout title={`Fotografia ${params.detailId}`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  );
};
