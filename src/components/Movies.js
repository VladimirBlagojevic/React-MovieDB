import React from 'react';
import Movie from './Movie';
import filterMoviesAndSeries from '../selectors/filterSort'
import {connect} from 'react-redux';

const MyColection = ({movies}) => {
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
          {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    </main>
  )
}

const mapStateToProps = (state) => ({
  movies:filterMoviesAndSeries(state.movies,state.filter)
  
});

export default connect(mapStateToProps)(MyColection);