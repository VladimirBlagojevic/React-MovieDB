import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


 const SideBar = ({movies,series,watchlist}) => {
  return (
    <div className='sidebar'>
      <ul>
          <li><NavLink exact to="/" className='i' activeClassName="selected">Discover</NavLink></li>
          <li><NavLink exact to="/movies" activeClassName="selected">Movies <span>{movies.length}</span></NavLink></li>
          <li><NavLink exact to="/series" activeClassName="selected">TV Shows <span>{series.length}</span></NavLink></li>
          <li><NavLink exact to="/watchlist" activeClassName="selected">Watchlist <span>{watchlist.length}</span></NavLink></li>
          <li><NavLink exact to="/about" activeClassName="selected">About</NavLink></li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies:state.movies,
  series:state.series,
  watchlist:state.watchlist
});

export default connect(mapStateToProps)(SideBar);