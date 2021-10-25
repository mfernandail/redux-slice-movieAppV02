import React from 'react';
import { ShowCard } from '../ShowCard/ShowCard';

export const ListOfShow = ({show}) => {
  return (
    <div className="movie-container">
    {
      show.Response === 'True'
        ? show.Search.map((movie, index) => (
            <ShowCard 
              key={movie.imdbID, '-', index} 
              data={movie}
            />
          ))
        : <div className="movies-error">
            <h3>{show.Error}</h3>
          </div>
    }
  </div>
  )
}
