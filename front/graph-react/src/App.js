import React from 'react';
import './App.css';
import Movies from './movies';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/"
})

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Movies />
      </div>
    </ApolloProvider>
  );
}

export default App;
