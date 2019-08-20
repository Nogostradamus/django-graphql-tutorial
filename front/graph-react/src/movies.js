import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    allMovies {
      edges {
        node {
          id
          title
          year
          director {
            name
            surname
          }
        }
      }
    }
  }
`;

function Movies() {

  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  

  const movies = data.allMovies.edges;

  return (
      <div>
        <h1>List of movies - React</h1>
        { movies.map( movie => {
          return <h2 key={movie.node.id}>{movie.node.title} ({movie.node.year})</h2>
        })}
      </div>
  );
}

export default Movies;
