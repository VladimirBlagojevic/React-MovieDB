//* Filter Reducer

const defaultFilterReducerState={
    text:'',
    sortBy:'rating' // rating or popularity
}

const filterReducer = (state = defaultFilterReducerState,action) => {
    switch(action.type){
      case 'SEARCH_BY_TEXT':
        return {
          ...state,
          text:action.text
        }
      case 'SORT_BY_RATING':
        return {
          ...state,
          sortBy:'rating'
        }
      case 'SORT_BY_POPULARITY':
        return {
          ...state,
          sortBy:'popularity'

        }
      default:
        return state
    }
};

export default filterReducer;