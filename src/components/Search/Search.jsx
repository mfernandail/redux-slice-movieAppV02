import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSeriesAsync, fetchMoviesAsync, getAllMovies } from '../../redux/movies/movieSlice';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { InputSearch } from '../inputSearch/InputSearch';
import { Spinner } from '../Spinner/Spinner';
import './Search.css';

export const Search = () => {
  const {searchShow} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  const searchLocal = localStorage.getItem('search') || '';

  const busqueda = searchShow || searchLocal
  
  console.log(busqueda);

  useEffect(() => {
    dispatch(fetchMoviesAsync(busqueda));
    dispatch(fetchSeriesAsync(busqueda));
    localStorage.setItem('search', busqueda);
  }, [searchLocal]);
  
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
