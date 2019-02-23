//* Watchlist Reducer

const defaultWatchlistReducerState = [];

const watchlistReducer = (state = defaultWatchlistReducerState,action) => {
  switch(action.type){
    case 'ADD_MOVIE_TO_WATCHLIST':
      return [
        ...state,
        action.movie
      ]
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return state.filter(({ id }) => id !== action.id)
      
    case 'ADD_SERIES_TO_WATCHLIST':
      return [
        ...state,
        action.series
      ]
    case 'REMOVE_SERIES_FROM_WATCHLIST':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default watchlistReducer;