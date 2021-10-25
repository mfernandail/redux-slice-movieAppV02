import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSeriesAsync, fetchMoviesAsync } from '../../redux/movies/movieSlice';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { InputSearch } from '../inputSearch/InputSearch';
import './Search.css';

export const Search = () => {
  const {searchShow} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync(searchShow));
    dispatch(fetchSeriesAsync(searchShow));
  }, []);

  useEffect(() => {
    dispatch(fetchMoviesAsync(searchShow));
    dispatch(fetchSeriesAsync(searchShow));
  }, [searchShow]);
  
  return (
    <>
      <InputSearch />
      <ShowListening />
    </>    
  )
}
