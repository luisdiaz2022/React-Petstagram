import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  concat,
  ApolloLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";

import { AppProvider } from "./Context.js";

import { App } from "./App.js";
import { graphqlPath } from "./utils.js";

const httpLink = new HttpLink({
  uri: `${graphqlPath}`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  //debugger;
  const authorization = token ? `Bearer ${token}` : "";
  operation.setContext({ headers: { authorization } });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location = "/user";
    }
  }),
});

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);
