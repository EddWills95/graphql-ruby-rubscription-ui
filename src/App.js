import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { Query, ApolloProvider } from 'react-apollo';

const GET_COUNTER = gql`
  {
    counter(id: 1) {
      id
      value
    }
  }
`

const counter = ({ onCounter }) => (
  <Query query={GET_COUNTER}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <p>{data.counter.value}</p>
      );
    }}
  </Query>
);

class App extends Component {

  constructor(props) {
    super(props);

    this.client = new ApolloClient({
      uri: 'http://localhost:3000/graphql'
    });

    this.subscribe = this.subscribe.bind(this);
  }

  subscribe() {
    this.client.subscribe() 
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <div className="App">
        <button onClick={this.subscribe}>Subscribe</button>
        <Query query={GET_COUNTER}>
          {({data}) => {
            console.log(data);
            return <p>hey</p>
          }}
        </Query>
        </div>
      </ApolloProvider>
      
    );
  }
}

export default App;
