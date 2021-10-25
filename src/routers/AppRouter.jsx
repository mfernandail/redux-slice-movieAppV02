import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
// import { Home } from '../pages/Home/Home';
// import { Detail } from '../pages/Detail/Detail';
// import { PageNotFound } from '../pages/Error/Error404';
// import { Search } from '../components/Search/Search';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMoviesAsync, fetchSeriesAsync } from '../redux/movies/movieSlice';
import { RoutesList } from './RoutesList';

export const AppRouter = () => {
  // const dispatch = useDispatch();
  // const {searchShow = ''} = useParams();

  // useEffect(() => {
  //   dispatch(fetchMoviesAsync())
  //   dispatch(fetchSeriesAsync())
  // }, [])

  return (
    <Router>
      <Header />
      <div className="container">      
        <RoutesList />
      </div>
      <Footer />
    </Router>
  )
}
