import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAllMovies, getAllSeries } from '../../redux/movies/movieSlice';
import { ListOfShow } from '../ListOfShows/ListOfShow';
import './ShowListening.css';

export const ShowListening = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const paramsURL = useParams();
  let showUrl = '';

  if(paramsURL.searchShow){
    showUrl = paramsURL.searchShow;
  }

  const shows = [{title: `Movies ${showUrl}`, typeShow: movies}, {title: `Series ${showUrl}`, typeShow: series}];

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        {
          shows.map(showL => {
            return (
              <div key={showL.title}>
                <h2 className="movie-list__title">{showL.title}</h2>
                <ListOfShow show={showL.typeShow} /> 
              </div>
            )
          })
        }
      </div>      
    </div>
  )
}
