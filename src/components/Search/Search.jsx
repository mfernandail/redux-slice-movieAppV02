import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSeriesAsync, fetchMoviesAsync, getAllMovies } from '../../redux/movies/movieSlice';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { InputSearch } from '../inputSearch/InputSearch';
import './Search.css';
import { Spinner } from '../Spinner/Spinner';

export const Search = () => {
  const {searchShow} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchMoviesAsync(searchShow));
    dispatch(fetchSeriesAsync(searchShow));
  }, [searchShow]);
  
  return (
    <>
      <InputSearch />
      {
        Object.keys(data).length === 0
        ? <Spinner />
        : <ShowListening />
      }
      
    </>    
  )
}
