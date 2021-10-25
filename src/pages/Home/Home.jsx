import React, { useEffect } from 'react';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync, fetchSeriesAsync, getAllMovies } from '../../redux/movies/movieSlice';
import { InputSearch } from '../../components/inputSearch/InputSearch';
import { Spinner } from '../../components/Spinner/Spinner';

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchSeriesAsync())
  }, []);

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
