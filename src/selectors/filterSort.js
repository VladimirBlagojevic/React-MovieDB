//* Filter Movies And Series

const filterMoviesAndSeries = (movies, { text, sortBy}) => {
  return movies.filter((movie) => {
    const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'rating') {
      return a.vote_average < b.vote_average ? 1 : -1;
    } else if (sortBy === 'popularity') {
      return a.popularity < b.popularity ? 1 : -1;
    }
  });
};

export default filterMoviesAndSeries;