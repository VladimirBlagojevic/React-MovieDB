import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SideBar from '../components/SideBar';
import DiscoverMovies from '../components/DiscoverMovies';
import MovieDetails from '../components/MovieDetails';
import Watchlist from '../components/Watchlist';
import About from '../components/About';
import NotFound from '../components/NotFound';
import Movies from '../components/Movies';
import Series from '../components/Series';


const AppRouter = () => (
  <BrowserRouter>
    <div className='router'>
      <SideBar />
      <Switch>
        <Route path="/" component={DiscoverMovies} exact={true} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
