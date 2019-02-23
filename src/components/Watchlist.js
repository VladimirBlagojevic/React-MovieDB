import React from 'react';
import Movie from './Movie';
import {connect} from 'react-redux';

const Watchlist = ({watchlist}) => {
  return (
    <main className='main-container scrollbar' id="style-1">
      <div className='search-container'>
        <input type="text" name='search' placeholder='Search Movies'/>
        <select name="showBy" >
          <option value="trend">Trending</option>
          <option value="top">Top rated</option>
        </select>
      </div>
        <div className='movies'>
          {watchlist.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    </main>
  )
}

const mapStateToProps = (state) => ({
  watchlist:state.watchlist
});

export default connect(mapStateToProps)(Watchlist);
