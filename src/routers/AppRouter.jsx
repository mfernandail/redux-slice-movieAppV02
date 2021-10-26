import React from 'react';
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

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="container">      
        <Switch>
          <Route
            path="/movie/:imdbid"
            component={Detail}
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


