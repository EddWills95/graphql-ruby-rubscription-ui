import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from "graphql-tag";

const COUNTERS_QUERY = gql`
  {
    counters {
      id
      value
    }
  }
`

export default class Counters extends Component {

  subscribe(id) {
    console.log(id);
  }

  render() {
    return(
      <Query query={COUNTERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className="Counters">
              {data.counters.map(c => (
                <div className="Counter" key={c.id}>
                  <div className="counter-info">
                    <p>ID: {c.id}</p>
                    <p>Value: {c.value}</p>
                  </div>
                  <div>
                    <button>Increment</button>
                    <button onClick={() => this.subscribe(c.id)}>Subscribe</button>
                  </div>
                </div>   
              ))}
            </div>
          );
        }}
      </Query>
    )
  }
}