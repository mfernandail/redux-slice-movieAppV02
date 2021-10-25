import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { fetchSeriesAsync, fetchMoviesAsync, getAllMovies } from '../../redux/movies/movieSlice';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { InputSearch } from '../inputSearch/InputSearch';
import { Spinner } from '../Spinner/Spinner';
import './Search.css';

export const Search = () => {

  const {searchShow} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  console.log('params ', searchShow)

  const location = useLocation();
  console.log('location ', location)

  const searchLocal = localStorage.getItem('search') || '';
  const busqueda = searchShow  || searchLocal

  useEffect(() => {
    dispatch(fetchMoviesAsync(busqueda));
    dispatch(fetchSeriesAsync(busqueda));
    // console.log('Entre')
    localStorage.setItem('search', searchShow);
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
