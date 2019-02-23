import React from 'react';
import Movie from './Movie';
import {connect} from 'react-redux';

const Series = ({series}) => {
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
          {series.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    </main>
  )
}

const mapStateToProps = (state) => ({
  series:state.series
});

export default connect(mapStateToProps)(Series);