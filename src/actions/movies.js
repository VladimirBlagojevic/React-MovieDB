import uuid from 'uuid';

 //! ADD_MOVIE

 export const addMovie = (
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
      type: 'ADD_MOVIE',
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

//! REMOVE_MOVIE

export const removeMovie = ({ id }) => ({
      type:'REMOVE_MOVIE',
      id
    })