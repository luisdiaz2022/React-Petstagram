import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import {App} from './App.js';

const client = new ApolloClient ({
    uri: 'https://petgram-server-luisedgucv2-luisdiaz2022.vercel.app/graphql',
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app'))
