import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import './index';
import App from './App';

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
