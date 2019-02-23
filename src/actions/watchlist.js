//! ADD_MOVIE_TO_WATCHLIST

export const addMovieToWatchlist = (
    {
      id='ID',
      title="Movie Title",
      overview="Movie Description",
      vote_average=0,
      poster_path='/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      release_date='NA',
      genres='',
      runtime=0,
      budget=0,
      popularity=0,
      cast=[]

    }={ } 
    )=> ({
      type: 'ADD_MOVIE_TO_WATCHLIST',
      movie: {
        id,
        title,
        overview,
        vote_average,
        poster_path,
        release_date,
        genres,
        runtime,
        budget,
        popularity,
        cast
      }
    });

//! REMOVE_MOVIE_FROM_WATCHLIST

export const removeMovieFromWatchlist = ({ id }) => ({
      type:'REMOVE_MOVIE_FROM_WATCHLIST',
      id
    })

//! ADD_SERIES_TO_WATCHLIST

export const addSeriesToWatchlist = (
    {
      id='ID',
      title="Series Title",
      overview="Movie Description",
      vote_average=0,
      poster_path='/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
      air_date= "NA",
      number_of_episodes=0,
      number_of_seasons=0,
      genres='',
      popularity=0,
      cast=[]

    }={ } 
    )=> ({
      type: 'ADD_SERIES_TO_WATCHLIST',
      series: {
        id,
        title,
        overview,
        vote_average,
        poster_path,
        air_date,
        number_of_episodes,
        number_of_seasons,
        genres,
        popularity,
        cast
      }
    });

//! REMOVE_SERIES_FROM_WATCHLIST

export const removeSeriesFromWatchlist = ({ id }) => ({
      type:'REMOVE_SERIES_FROM_WATCHLIST',
      id
    })