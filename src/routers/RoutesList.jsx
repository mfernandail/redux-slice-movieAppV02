import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { Home } from '../pages/Home/Home';
import { Detail } from '../pages/Detail/Detail';
import { Search } from '../components/Search/Search';
import { fetchMoviesAsync, fetchSeriesAsync } from '../redux/movies/movieSlice';

export const RoutesList = () => {
  const dispatch = useDispatch();
  const {searchShow = ''} = useParams();
  
  useEffect(() => {
    dispatch(fetchMoviesAsync(searchShow))
    dispatch(fetchSeriesAsync(searchShow))
  }, []);

  return (
    <Switch>
      <Route
        path="/movie/:imdbid"
        component={Detail}
      />
      <Route
        path="/search/:searchShow"
        component={Search}
        // exact
      />          
      <Route
        path="/"
        exact
        component={Home}
      />
      <Redirect to="/" />
    </Switch>
  )
}
