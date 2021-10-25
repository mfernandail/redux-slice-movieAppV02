import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Home } from '../pages/Home/Home';
import { Detail } from '../pages/Detail/Detail';
import { Footer } from '../components/Footer/Footer';
import { PageNotFound } from '../pages/Error/Error404';
import { Search } from '../components/Search/Search';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMoviesAsync, fetchSeriesAsync } from '../redux/movies/movieSlice';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const {searchShow = ''} = useParams();


  useEffect(() => {
    dispatch(fetchMoviesAsync(searchShow))
    dispatch(fetchSeriesAsync(searchShow))
  }, [])

  return (
    <Router>
      <Header />
      <div className="container">      
        <Switch>
          <Route
            path="/movie/:imdbid"
            component={Detail}
          />
          <Route
            path="/search/:searchShow"
            component={Search}
            exact
          />          
          <Route
            path="/"
            exact
            component={Home}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
