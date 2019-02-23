import {createStore,combineReducers} from 'redux';
import moviesReducer from '../reducers/moviesReducer';
import seriesReducer from '../reducers/seriesReducer';
import watchlistReducer from '../reducers/watchlistReducer';
import filterReducer from '../reducers/filterReducer';

export default () => {
  const store=createStore(
    combineReducers({
      movies: moviesReducer,
      series: seriesReducer,
      watchlist:watchlistReducer,
      filter: filterReducer
    })
  )

  return store
}
