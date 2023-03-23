import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { AppProvider } from "./Context.js";

import { App } from "./App.js";
import { graphqlPath } from "./utils.js";

const client = new ApolloClient({
  uri: `${graphqlPath}`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);
