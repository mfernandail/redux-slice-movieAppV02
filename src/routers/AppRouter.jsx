import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { RoutesList } from './RoutesList';

export const AppRouter = () => {
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
