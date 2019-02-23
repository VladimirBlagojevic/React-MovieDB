import uuid from 'uuid';

//* Series Reducer
const defaultSeriesReducerState = [];
   
const seriesReducer = (state = defaultSeriesReducerState,action) => {
  switch(action.type){
    case 'ADD_SERIES':
      return [
        ...state,
        action.series
      ]
    case 'REMOVE_SERIES':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
};

export default seriesReducer;