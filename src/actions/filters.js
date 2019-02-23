//! SEARCH_BY_TEXT

export const textSearch = ({text=''} = {}) => ({
    type:'SEARCH_BY_TEXT',
    text
  });

//! SORT_BY_RATING

export const sortByRating = () => ({
  type:'SORT_BY_RATING'
})

//! SORT_BY_POPULARITY

export const sortByPopularity = () => ({
  type:'SORT_BY_POPULARITY'
})