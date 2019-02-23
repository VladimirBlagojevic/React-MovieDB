
//! ADD_SERIES

export const addSeries = (
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
      type: 'ADD_SERIES',
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

//! REMOVE_SERIES

export const removeSeries = ({ id }) => ({
      type:'REMOVE_SERIES',
      id
    })