import React, { useEffect } from 'react';
import { ShowListening } from '../../components/ShowListening/ShowListening';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync, fetchSeriesAsync, getAllMovies } from '../../redux/movies/movieSlice';
import { InputSearch } from '../../components/inputSearch/InputSearch';
import { Spinner } from '../../components/Spinner/Spinner';
import { useLocation, useParams } from 'react-router';

export const Home = () => {

  const query = new URLSearchParams(useLocation().search);
  const querySearch = query.get('search') || '';
  console.log('location ', querySearch)



  const dispatch = useDispatch();
  const data = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchMoviesAsync(querySearch));
    dispatch(fetchSeriesAsync(querySearch))
    // localStorage.setItem('search', querySearch);

  }, [querySearch]);

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
