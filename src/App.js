import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Counters from './components/counters';


const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Counters />
      </ApolloProvider>
    );
  }
}

export default App;
